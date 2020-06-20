import {
	HANDLE_CHANGE
} from "../../constants/actionTypes";

export default function Home(
	state = {
		countries:{
            Portugal:[
                {name:"Aasiya Jayavant",checked:false},
                {name:"Luvleen Lawrence",checked:false},
                {name:"Rey Mibourne",checked:false},
                {name:"Cayla Brister",checked:false}
            ],
            Nicaragua:[
                {name:"Deveedaas Nandi",checked:false},
                {name:"Obasey Chidy",checked:false},
                {name:"Xenie",checked:false},
                {name:"Ezequiel",checked:false}
            ],
            Marshall:[
                {name:"Aaron",checked:false},
                {name:"Jelena",checked:false},
            ]
        }
	},
	action
){
	switch(action.type){
		case HANDLE_CHANGE:
			return Object.assign({},state,{countries:action.payload});
		default:
			return state;
	}
	
}