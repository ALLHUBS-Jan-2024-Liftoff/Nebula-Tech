package org.nebula_tech.itinera.dto;

public class DemoResponse {
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
