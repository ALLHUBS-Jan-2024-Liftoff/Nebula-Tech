package com.lc.itinera.controllers;

import com.lc.itinera.dto.DemoRequest;
import com.lc.itinera.dto.DemoResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

	@GetMapping("/api/demo")
	public DemoResponse getDemo() {
		return new DemoResponse("Hello", "World");
	}

	@PostMapping("/api/demo")
	public DemoResponse createDemo(@RequestBody DemoRequest request) {
		return new DemoResponse(request.getName(), request.getDescription());
	}
}