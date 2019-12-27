package com.revature.configuration;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import com.revature.util.DeepFieldFilter;

@Configuration
@EnableWebMvc
public class JsonConfig implements WebMvcConfigurer{
	
	  /* Here we register the Hibernate4Module into an ObjectMapper, then set this custom-configured ObjectMapper
     * to the MessageConverter and return it to be added to the HttpMessageConverters of our application*/
    public MappingJackson2HttpMessageConverter jacksonMessageConverter(){
        MappingJackson2HttpMessageConverter messageConverter = new MappingJackson2HttpMessageConverter();

        ObjectMapper mapper = new ObjectMapper();
        //Registering Hibernate5Module to support lazy objects
//        mapper.registerModule(new Hibernate5Module());
        SimpleFilterProvider depthFilters = new SimpleFilterProvider().addFilter("depth_1", new DeepFieldFilter(1))
                .addFilter("depth_2", new DeepFieldFilter(2))
                .addFilter("depth_3", new DeepFieldFilter(3))
                .addFilter("depth_4", new DeepFieldFilter(4))
                .addFilter("depth_5", new DeepFieldFilter(5));
		mapper.setFilterProvider(depthFilters);

        messageConverter.setObjectMapper(mapper);
        return messageConverter;
    }
    
    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        //Here we add our custom-configured HttpMessageConverter
        converters.add(jacksonMessageConverter());
    }

}
