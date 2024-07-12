package com.lc.itinera.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReactController {
	// every GET request to server being handled by react router
	@GetMapping(value = "/**/{path:[^\\.]*}")
	public String forward() {
		return "forward:/";
	}
}
