package org.nebula_tech.itinera.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReactController {
	// React router handles every GET request to server
	@GetMapping(value = "/**/{path:[^\\.]*}")
	public String forward() {
		return "forward:/";
	}
}
