package com.lc.itinera.controllers;

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
		return new DemoResponse("Demo created successfully", "great");
	}
}

class DemoResponse {
	private String message;
	private String description;

	public DemoResponse(String message, String description) {
		this.message = message;
		this.description = description;
	}
	public String getMessage() {
		return message;
	}
	public String getDescription() {
		return description;
	}
}

class DemoRequest {
	private String name;
	private String description;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}