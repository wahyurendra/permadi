import joblib
import os


def predictMaintenance(data):
    selected_type = data['type']
    air_temperature = data['air_temperature']
    process_temperature = data['process_temperature']
    rotational_speed = data['rotational_speed']
    torque = data['torque']
    tool_wear = data['tool_wear']
    type_mapping = {'Low': 0, 'Medium': 1, 'High': 2}
    
    current_dir = os.path.dirname(os.path.abspath(__file__))
    model_path = os.path.join(current_dir, "model.joblib")
    model = joblib.load(model_path)
    prediction = model.predict([[selected_type, float(air_temperature), 
                                    float(process_temperature), int(rotational_speed),
                                    float(torque), int(tool_wear)]])
    return prediction