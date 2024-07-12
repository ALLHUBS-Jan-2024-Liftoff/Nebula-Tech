package org.nebula_tech.itinera.controllers;

import org.nebula_tech.itinera.dto.DemoRequest;
import org.nebula_tech.itinera.dto.DemoResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DemoController {

	@GetMapping("/demo")
	public DemoResponse getDemo() {
		return new DemoResponse("Hello", "World");
	}

	@PostMapping("/demo")
	public DemoResponse createDemo(@RequestBody DemoRequest request) {
		return new DemoResponse(request.getName(), request.getDescription());
	}
}