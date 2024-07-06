package com.lc.itinera.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactController {
	//    @RequestMapping("/{path:^(?!api).*$}/**")
	@RequestMapping
	public String index() {
		return "/index.html";
	}
}
