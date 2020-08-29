import React  from 'react';// eslint-disable-line no-unused-vars
import  { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import '../../App.css';
import { v4 as uuidv4 } from 'uuid';

export function* watcherSaga() {
    yield takeEvery("GETDATA", care_recipient);
  }

//Fetch data from
function care_recipient_Async (userInput){
          
    return axios.get("https://birdiebackend.herokuapp.com", { params: { userInput: userInput.payload } })
    
}

export function* care_recipient(action){
    try {
        let resp = yield call(()=>care_recipient_Async(action));
         
         console.log(Object.keys(resp.data.rows).length)
       let size = Object.keys(resp.data.rows).length; //Number of object to iterate through.
       //data cleaning and converting to array of object
         let i =0;
         let obj = [];
         for(i=0; i<size; i++){
          obj.push(JSON.parse(resp.data.rows[i].payload))
         }
        
           let data = obj.map((item)=>{
            return <div>
                       <tr>
                       <th>id</th>
                       <th>care_recipient_id</th>
                       <th>caregiver_id</th>
                       <th>timestamp</th>
                       <th>fluid</th>
                       <th>event_type</th>
                       <th>consumed_volume_ml</th>
                       <th>medication_type</th>
                       <th>meal</th>
                       <th>observed</th>
                       <th>note</th>
                       </tr>
                       <td key={uuidv4()}  className="map-td">{item.id}</td>

                       <td key={uuidv4()}  className="map-td">{item.care_recipient_id}</td>
                       
                       <td key={uuidv4()}  className="map-td">{item.caregiver_id}</td>
                       
                       <td key={uuidv4()}  className="map-td">{new Date(item.timestamp).toLocaleString()}</td>
                       
                       <td key={uuidv4()}  className="map-td">{item.fluid}</td>
              
                       <td key={uuidv4()}  className="map-td">{item.event_type}</td>

                       <td key={uuidv4()}  className="map-td">{item.consumed_volume_ml}</td>
                       
                       <td key={uuidv4()}  className="map-td">{item.medication_type}</td>
    
                       <td key={uuidv4()}  className="map-td">{item.meal}</td>
              
                       <td key={uuidv4()}  className="map-td">{item.observed}</td>
            
                       <td key={uuidv4()}  className="map-td">{item.note}</td>
                      
                 </div>})
        
        yield put({ type: "GETDATA_F", payload:data});
      } catch (e) {
        console.log(e)
      }
}

