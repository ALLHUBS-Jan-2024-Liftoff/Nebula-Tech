package org.nebula_tech.itinera.utils;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import jakarta.persistence.AttributeConverter;
import org.nebula_tech.itinera.models.TripDatePrice;

import java.util.List;
import java.util.Map;

public class TripDatesConverter implements AttributeConverter<Map<String, List<TripDatePrice>>, String> {
    @Override
    public String convertToDatabaseColumn(Map<String, List<TripDatePrice>> attribute) {
        return new Gson().toJson(attribute);
    }

    @Override
    public Map<String, List<TripDatePrice>> convertToEntityAttribute(String dbData) {
        return new Gson().fromJson(dbData, new TypeToken<Map<String, List<TripDatePrice>>>(){}.getType());
    }
}