package com.csu.partystore.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.csu.partystore.forms.Register;
import com.csu.partystore.models.Authorities;
import com.csu.partystore.models.CustomCart;
import com.csu.partystore.models.DefaultCart;
import com.csu.partystore.models.Geography;
import com.csu.partystore.models.UserDetails;
import com.csu.partystore.models.Users;
import com.csu.partystore.repository.AuthoritiesRepo;
import com.csu.partystore.repository.CustomCartInfo;
import com.csu.partystore.repository.DefaultCartInfo;
import com.csu.partystore.repository.GeographyRepo;
import com.csu.partystore.repository.UserDetailsRepo;
import com.csu.partystore.repository.UsersRepo;

import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;

@Controller
public class Home {

	@Autowired
	AuthoritiesRepo authoritiesRepo;

	@Autowired
	GeographyRepo geographyRepo;

	@Autowired
	UserDetailsRepo userDetailsRepo;

	@Autowired
	UsersRepo usersRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	DefaultCartInfo defaultCartInfo;
	
	@Autowired
	CustomCartInfo customCartInfo;

	@RequestMapping(value = {"/home", "/register"})
	public String runOptimizationResult(Model model, HttpSession session) {
		return "index";
	}
	
	@RequestMapping(value = "/login")
	public String login() {
		return "login";
	}
	
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	@CrossOrigin(origins="http://127.0.0.1:9090")
	public String logout(HttpServletRequest request, HttpServletResponse response) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth != null) {
			new SecurityContextLogoutHandler().logout(request, response, auth);
		}
		return "redirect:/login";

	}
	
	@RequestMapping(value = "/")
	public String defaultRoute() {
		return "redirect:/home";
	}

	@RequestMapping(value = "/register-user", method = RequestMethod.POST)
	@ResponseBody
	@CrossOrigin({"http://localhost:3000", "http://localhost:9090", "http://192.168.1.34:9090"})
	public HashMap<String, String> registerUser(@RequestBody Register user) {

		UserDetails userDetails = new UserDetails();
		userDetails.setFirstName(user.getFirstname());
		userDetails.setLastName(user.getLastname());
		userDetails.setEmail(user.getEmail());
		userDetails.setCity(user.getCity());
		userDetails.setState(user.getState());
		userDetails.setZipcode(user.getZipcode());
		userDetails.setAddressLine1(user.getAddress1());
		userDetails.setAddressLine2(user.getAddress2());

		Users users = new Users();
		users.setUsername(user.getEmail());
		users.setPassword(passwordEncoder.encode(user.getPassword()));
		users.setEnabled(1);

		Authorities authorities = new Authorities();
		authorities.setAuthority("ROLE_USER");
		authorities.setUsername(user.getEmail());

		HashMap<String, String> map = new HashMap<String, String>();

		try {
			if(userDetailsRepo.isUserExists(user.getEmail()) != null) {
				map.put("response", "USER_ID_EXISTS");
				return map;
			}
			
			userDetailsRepo.save(userDetails);
			usersRepo.save(users);
			authoritiesRepo.save(authorities);

			map.put("response", "SUCCESS");
		} catch (Exception e) {
			map.put("response", "INTERNAL_FAILURE");
			e.printStackTrace();
		}

		return map;

	}
	
	@RequestMapping(value = "/geo-list", method = RequestMethod.GET)
	@ResponseBody
	@CrossOrigin(origins="http://192.168.1.34:9090")
	//@CrossOrigin(origins="http://127.0.0.1:3000")
	public HashMap<String, Set<String>> getGeography(){
		
		List<Geography> geographies = (List<Geography>) geographyRepo.findAll();
		
		HashMap<String, Set<String>> geoList = (HashMap<String, Set<String>>) geographies.stream().collect(
                Collectors.groupingBy(Geography::getState, Collectors.mapping(Geography::getCity, Collectors.toSet())));
		
		return geoList;
		
	}
	
	@RequestMapping(value = "/logged-username", method = RequestMethod.GET)
	@ResponseBody
	@CrossOrigin(origins="http://192.168.1.34:9090")
	public HashMap<String, String> getLoggedUserName(){
		
		HashMap<String, String> map = new HashMap<String, String>();
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String email = authentication.getName();
		
		if(email.equals("anonymousUser")) {
			map.put("userName", "anonymousUser");
		}
		
		else {
			String name = userDetailsRepo.getUserNameByEmial(email);
			map.put("userName", name);
			
		}
		
		return map;
		
	}
	
	@RequestMapping(value = "/add-to-cart-default", method = RequestMethod.POST)
	@ResponseBody
	//@CrossOrigin(origins="http://127.0.0.1:9090")
	@CrossOrigin(origins="http://127.0.0.1:3000")
	public HashMap<String, String> addToDefaultCart(@RequestBody DefaultCart defaultCart){
		
		HashMap<String, String> map = new HashMap<String, String>();
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String email = authentication.getName();
		
		defaultCart.setEmail(email);
		defaultCartInfo.save(defaultCart);
		
		map.put("status", "success");
		
		
		return map;
		
	}
	
	@RequestMapping(value = "/add-to-cart-custom", method = RequestMethod.POST)
	@ResponseBody
	//@CrossOrigin(origins="http://127.0.0.1:9090")
	@CrossOrigin(origins="http://127.0.0.1:3000")
	public HashMap<String, String> addToCustomCart(@RequestBody CustomCart customCart){
		
		HashMap<String, String> map = new HashMap<String, String>();
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String email = authentication.getName();
		
		if(customCart.getTshirtFont() == null || customCart.getTshirtFont().equals(""))
			customCart.setCategory("CAKE");
		else
			customCart.setCategory("TSHIRT");
		
		customCart.setEmail(email);
		customCartInfo.save(customCart);
		
		map.put("status", "success");
		
		
		return map;
		
	}
	
	@RequestMapping(value = "/default-cart-items", method = RequestMethod.GET)
	@ResponseBody
	//@CrossOrigin(origins="http://127.0.0.1:9090")
	@CrossOrigin(origins="http://127.0.0.1:3000")
	public List<DefaultCart> getDefaultCartItems(){
		
		List<DefaultCart> defaultCartList;
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String email = authentication.getName();
		
		defaultCartList = (List<DefaultCart>) defaultCartInfo.getDefaultCartInfoByEmail(email);
		
		
		return defaultCartList;
		
	}
	
	@RequestMapping(value = "/custom-cart-items", method = RequestMethod.GET)
	@ResponseBody
	//@CrossOrigin(origins="http://127.0.0.1:9090")
	@CrossOrigin(origins="http://127.0.0.1:3000")
	public List<CustomCart> getCustomCartItems(){
		
		List<CustomCart> defaultCartList;
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String email = authentication.getName();
		
		defaultCartList = (List<CustomCart>) customCartInfo.getCustomCartInfoByEmail(email);
		
		return defaultCartList;
		
	}
	
	@RequestMapping("/places-list")
	@ResponseBody
	public JSONObject getPlacesList() throws ParseException {
		
		JSONParser parser = new JSONParser();
		JSONObject json = (JSONObject) parser.parse(MADString.placesData);
		
		return json;
		
	}
	
	
}