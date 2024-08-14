package org.nebula_tech.itinera.controllers;

import jakarta.servlet.http.HttpSession;
import org.nebula_tech.itinera.dto.DemoRequest;
import org.nebula_tech.itinera.dto.DemoResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DemoController {

	@GetMapping("/demo") // sends JSON as data transfer object
	public DemoResponse getDemo() {
		return new DemoResponse("Hello", "World");
	}

	@PostMapping("/demo") // returns demo form input values
	public DemoResponse createDemo(@RequestBody DemoRequest request, HttpSession session) {
		System.out.println(session.getId());
		return new DemoResponse(request.getName(), request.getDescription());
	}
}