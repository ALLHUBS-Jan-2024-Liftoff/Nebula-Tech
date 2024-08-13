package org.nebula_tech.itinera.utils;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebApplicationConfig implements WebMvcConfigurer {

    // Create spring-managed object to allow the app to access our filter
    @Bean
    public AuthenticationFilter authenticationFilter() {
        return new AuthenticationFilter();
    }

    // Register the filter with the Spring container
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor( authenticationFilter() );
    }

    // Configure CORS
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // Update with your frontend's URL
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
