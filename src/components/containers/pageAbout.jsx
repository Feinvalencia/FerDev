import React, {Component} from "react";
import SEO from '../../components/SEO';

import Cover from '../../components/Home/Cover';
import Image from '../../components/About/Image';
import TechCarousel from '../../components/Technology/TechCarousel';
import TextList from '../../components/About/TextList';
import LogoCarousel from '../../components/Home/LogoCarousel';
import SpecialText from '../../components/SpecialText';
import Text from '../../components/Solutions/Text';
import Parallax from '../../components/About/Parallax';
import JoinUs from '../../components/About/JoinUs';
import ArrowTitle from '../../components/ArrowTitle';
import Ornaments from '../../components/Ornaments';
import NextSection from '../../components/Home/NextSection';


import GeneralAnimations from '../utils/generalAnimations';
/* import CustomScroll from '../utils/customScroll';
import CustomCursor from '../utils/customCursor'; */

/* import data from '../assets/data.png';
import vision from '../assets/window1.png';
import titanic from '../assets/titanic.png';
import videoData from '../assets/datos.mp4'
import videoBirds from '../assets/birds.mp4'
import videoPiramide from '../assets/piramide.mp4' */
// import cover from '../assets/about-composition.png';
import cover from '../../assets/flag.jpg';

import imgValue1 from '../../assets/img/values/1.jpg';
import imgValue3 from '../../assets/img/values/3.jpg';
import imgValue4 from '../../assets/img/values/4.jpg';
import imgValue2 from '../../assets/img/values/2.jpg';
import imgValue5 from '../../assets/img/values/5.jpg';
import imgValue6 from '../../assets/img/values/6.jpg';


class pageAbout extends Component {
	
	constructor(props){
		super(props)
		this.state  = {
			dataList:[
				{
					text: this.props.data.dataList[0].text,
					img: {imgValue1},
				},
				{
					text: this.props.data.dataList[1].text,
					img: {imgValue2},
				},
				{
					text: this.props.data.dataList[2].text,
					img: {imgValue3},
				},
				{
					text: this.props.data.dataList[3].text,
					img: {imgValue4},
				},
				{
					text: this.props.data.dataList[4].text,
					img: {imgValue5},
				},
				{
					text: this.props.data.dataList[5].text,
					img: {imgValue6},
				},
			],
			dataText: {
				title: {
					text: this.props.data.coverDescription,
					class: "font-h2 font-general",
				},
			},
			joinUsData: {
				title: {__html:this.props.data.joinUsData.title},
				description: this.props.data.joinUsData.description,
			},
			// textLoop: this.props.data.textLoop.join(" · ")+" ·",
			nextSectionData: this.props.data.nextSectionData,
		}
		this.codedSvg = <svg width="487px" height="377px" viewBox="0 0 487 377" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <defs> <path d="M352.02741,207.894419 C353.170567,206.009721 354.378097,204.142351 355.650001,202.292308 C358.950018,197.492284 362.999977,194.042318 367.800001,191.942308 C374.400034,189.242294 380.249976,189.992287 385.350001,194.192308 C387.15001,195.392314 388.499997,197.042297 389.400001,199.142308 C390.600007,201.54232 390.600007,203.642299 389.400001,205.442308 C388.199995,207.242317 386.400013,208.442305 384.000001,209.042308 L381.300001,209.042308 C377.399982,208.742306 374.100015,210.39229 371.400001,213.992308 L368.700001,218.042308 C362.699971,227.642356 357.750021,237.542257 353.850001,247.742308 C353.249998,248.942314 352.650004,250.742296 352.050001,253.142308 C352.950006,253.742311 353.624999,253.81731 354.075001,253.367308 C354.525004,252.917306 355.049998,252.542309 355.650001,252.242308 C358.050013,249.842296 360.524989,247.517319 363.075001,245.267308 C365.625014,243.017297 368.099989,240.542321 370.500001,237.842308 L395.700001,207.242308 C397.50001,204.842296 398.999995,202.44232 400.200001,200.042308 C401.400007,197.642296 402.449997,195.092321 403.350001,192.392308 C407.550022,177.092231 411.82498,162.017382 416.175001,147.167308 C420.525023,132.317234 425.249976,117.392383 430.350001,102.392308 C434.850024,88.8922405 439.724975,75.7673717 444.975001,63.017308 C450.225028,50.2672442 455.849971,37.592371 461.850001,24.992308 C463.050007,22.592296 464.099997,20.1173207 465.000001,17.567308 C465.900006,15.0172952 466.949995,12.54232 468.150001,10.142308 C468.750004,8.64230049 469.424998,7.29231399 470.175001,6.09230799 C470.925005,4.89230199 471.749997,3.69231399 472.650001,2.49230799 C474.150009,0.692298987 475.949991,-0.132692763 478.050001,0.0173079873 C480.150012,0.167308737 481.799995,1.29229749 483.000001,3.39230799 C483.900006,4.59231399 484.649998,6.69229299 485.250001,9.69230799 C485.850004,12.9923245 486.000003,16.142293 485.700001,19.142308 C485.4,22.142323 484.950004,25.2922915 484.350001,28.592308 C482.849994,38.4923575 480.675016,48.24226 477.825001,57.842308 C474.974987,67.442356 471.750019,77.04226 468.150001,86.642308 C463.049976,100.142375 457.65003,113.567241 451.950001,126.917308 C446.249973,140.267375 440.100034,153.542242 433.500001,166.742308 C431.399991,170.642327 429.300012,174.467289 427.200001,178.217308 C425.099991,181.967327 423.000012,185.792288 420.900001,189.692308 C419.999997,191.192315 419.100006,192.617301 418.200001,193.967308 C417.299997,195.317315 416.550004,196.7423 415.950001,198.242308 C411.149977,214.74239 406.500024,231.167226 402.000001,247.517308 C397.499979,263.86739 393.450019,280.592222 389.850001,297.692308 C387.749991,306.692353 385.87501,315.767262 384.225001,324.917308 C382.574993,334.067354 380.700012,343.142263 378.600001,352.142308 C377.699997,356.342329 377.250001,360.392288 377.250001,364.292308 C377.250001,365.192312 377.4,366.092303 377.700001,366.992308 L378.600001,369.692308 C379.500006,371.792318 378.900012,373.5923 376.800001,375.092308 C374.699991,376.592315 372.75001,377.042311 370.950001,376.442308 C368.849991,375.542303 367.350006,374.042318 366.450001,371.942308 C365.249995,368.942293 364.949998,365.342329 365.550001,361.142308 C365.850003,359.042297 366.15,357.017318 366.450001,355.067308 C366.750003,353.117298 367.199998,351.092318 367.800001,348.992308 C369.000007,342.692276 370.124996,336.392339 371.175001,330.092308 C372.225007,323.792276 373.499994,317.492339 375.000001,311.192308 C377.700015,297.392239 380.474987,283.667376 383.325001,270.017308 C386.175016,256.36724 389.399983,242.792375 393.000001,229.292308 L393.000001,226.592308 L392.100001,227.492308 C389.699989,229.89232 387.525011,232.292296 385.575001,234.692308 C383.624992,237.09232 381.600012,239.492296 379.500001,241.892308 C376.199985,245.192324 373.050016,248.417292 370.050001,251.567308 C367.049986,254.717324 363.900018,257.942291 360.600001,261.242308 C359.699997,262.142312 358.35001,263.192302 356.550001,264.392308 C353.249985,266.492318 349.875019,266.942314 346.425001,265.742308 C342.974984,264.542302 340.500009,262.142326 339.000001,258.542308 C337.799995,255.542293 337.35,252.242326 337.650001,248.642308 C338.221191,244.15439 339.080899,239.74417 340.22913,235.411637 C335.543025,240.11906 330.783339,244.679261 325.950001,249.092308 C319.049967,255.392339 311.70004,261.092282 303.900001,266.192308 C302.099992,267.392314 300.30001,268.517303 298.500001,269.567308 C296.699992,270.617313 294.750012,271.592303 292.650001,272.492308 C285.749967,275.792324 279.825026,275.867324 274.875001,272.717308 C269.924977,269.567292 266.55001,265.142336 264.750001,259.442308 L263.400001,252.692308 C263.1,251.1923 262.950001,249.617316 262.950001,247.967308 C262.950001,246.3173 262.950001,244.742315 262.950001,243.242308 C263.250003,237.542279 264.224993,231.017345 265.875001,223.667308 C267.52501,216.317271 269.699988,208.667348 272.400001,200.717308 C275.100015,192.767268 278.324983,184.967346 282.075001,177.317308 C285.82502,169.66727 289.79998,162.392342 294.000001,155.492308 C296.400013,151.89229 298.799989,148.367325 301.200001,144.917308 C303.600013,141.467291 305.999989,138.092324 308.400001,134.792308 C309.300006,133.2923 310.274996,132.017313 311.325001,130.967308 L314.700001,127.592308 C316.200009,126.0923 317.849992,124.892312 319.650001,123.992308 C325.050028,121.592296 328.799991,123.392278 330.900001,129.392308 C331.800006,132.692324 331.800006,135.842293 330.900001,138.842308 C330.299998,140.342315 329.775004,141.9173 329.325001,143.567308 C328.874999,145.217316 328.350004,146.7923 327.750001,148.292308 C320.849967,164.492389 311.400061,178.892245 299.400001,191.492308 C297.899994,192.992315 296.25001,194.417301 294.450001,195.767308 C292.649992,197.117315 290.85001,198.5423 289.050001,200.042308 C286.949991,201.542315 285.750003,203.192299 285.450001,204.992308 C283.649992,210.992338 282.000009,217.067277 280.500001,223.217308 C278.999994,229.367339 277.950004,235.592276 277.350001,241.892308 C277.350001,243.692317 277.425001,245.492299 277.575001,247.292308 C277.725002,249.092317 277.800001,250.892299 277.800001,252.692308 L277.800001,255.392308 C279.60001,260.792335 283.049976,262.592317 288.150001,260.792308 C291.450018,259.892303 294.449988,258.542317 297.150001,256.742308 L305.250001,251.342308 C307.950015,249.542299 310.499989,247.592318 312.900001,245.492308 C318.000027,241.592288 322.799979,237.46733 327.300001,233.117308 C331.800024,228.767286 336.299979,224.34233 340.800001,219.842308 C344.100018,216.24229 347.474984,212.642326 350.925001,209.042308 C351.293325,208.65797 351.660793,208.275343 352.027406,207.894426 Z M158.052891,220.96193 C154.333917,223.481967 150.299641,225.883747 145.950001,228.167308 C139.949971,231.317324 133.500036,233.492302 126.600001,234.692308 L117.600001,249.092308 C115.499991,252.392324 112.800018,255.692291 109.500001,258.992308 C107.399991,261.092318 105.000015,262.592303 102.300001,263.492308 C95.9999698,265.89232 91.2000178,264.242336 87.9000013,258.542308 C85.4999893,254.642288 84.3000013,250.592329 84.3000013,246.392308 C84.018291,239.067839 84.5963065,232.007952 86.0340582,225.212603 C84.7611915,226.422502 83.5081729,227.632404 82.2750013,228.842308 C74.3249616,236.642347 66.1500433,244.442269 57.7500013,252.242308 C54.4499848,255.542324 51.1500178,258.692293 47.8500013,261.692308 C44.5499848,264.692323 41.2500178,267.842291 37.9500013,271.142308 C36.4499938,272.642315 34.8750096,273.992302 33.2250013,275.192308 C31.5749931,276.392314 30.0000088,277.592302 28.5000013,278.792308 C26.0999893,280.892318 23.1000193,282.6923 19.5000013,284.192308 C12.2999653,287.192323 6.75002083,285.242342 2.85000133,278.342308 C1.04999233,275.342293 0.150001333,271.742329 0.150001333,267.542308 C-0.150000167,262.742284 -1.6666649e-06,258.09233 0.600001333,253.592308 C1.20000433,249.092285 2.09999533,244.59233 3.30000133,240.092308 C4.80000883,233.492275 6.59999083,227.117339 8.70000133,220.967308 C10.8000118,214.817277 13.4999848,208.742338 16.8000013,202.742308 C20.1000178,196.742278 24.2999758,191.792327 29.4000013,187.892308 C34.5000268,184.29229 39.4499773,182.342309 44.2500013,182.042308 C51.1500358,181.442305 56.5499818,183.242287 60.4500013,187.442308 C64.3500208,191.642329 66.0000043,196.292282 65.4000013,201.392308 C65.4000013,203.192317 65.2500028,204.392305 64.9500013,204.992308 C63.7499953,207.092318 62.2500103,208.142308 60.4500013,208.142308 C58.6499923,208.142308 57.3000058,207.392315 56.4000013,205.892308 C55.7999983,205.292305 55.4250021,204.617312 55.2750013,203.867308 C55.1250006,203.117304 54.7500043,202.442311 54.1500013,201.842308 C52.3499923,198.24229 49.5000208,196.892303 45.6000013,197.792308 C43.7999923,198.092309 42.1500088,198.842302 40.6500013,200.042308 C37.0499833,202.142318 34.3500103,205.142288 32.5500013,209.042308 C27.7499773,218.042353 23.7750171,227.267261 20.6250013,236.717308 C17.4749856,246.167355 15.3000073,255.992257 14.1000013,266.192308 C13.4999983,269.492324 14.0999923,272.192297 15.9000013,274.292308 L15.9000013,273.842308 C19.5000193,272.942303 22.7999863,270.992323 25.8000013,267.992308 C29.4000193,264.692291 32.9999833,261.467324 36.6000013,258.317308 C40.2000193,255.167292 43.7999833,251.942324 47.4000013,248.642308 C57.3000508,239.942264 66.6749571,231.092353 75.5250013,222.092308 C81.1800873,216.341373 86.9882329,210.835476 92.9495103,205.574549 C93.352379,204.776174 93.7692093,203.982093 94.2000013,203.192308 C95.4000073,201.092297 97.0499908,198.992318 99.1500013,196.892308 C102.012808,194.745203 104.608808,194.252157 106.938029,195.413175 C107.318187,195.30622 107.722177,195.199264 108.150001,195.092308 C109.650009,194.792306 110.999995,195.692297 112.200001,197.792308 C113.100006,199.292315 113.100006,200.642302 112.200001,201.842308 C112.159465,201.909869 112.11832,201.97682 112.076567,202.043164 C112.116195,202.123937 112.15734,202.206985 112.200001,202.292308 L116.250001,196.892308 C120.150021,192.092284 123.899983,190.592299 127.500001,192.392308 C131.100019,193.892315 132.900001,197.192282 132.900001,202.292308 C133.200003,204.992321 133.125004,207.692294 132.675001,210.392308 C132.224999,213.092321 131.700004,215.792294 131.100001,218.492308 L130.200001,223.442308 C135.90003,222.542303 141.149977,220.742321 145.950001,218.042308 C150.750025,215.342294 154.949983,212.567322 158.550001,209.717308 C162.150019,206.867294 165.224989,204.092321 167.775001,201.392308 C170.325014,198.692294 172.199995,196.892312 173.400001,195.992308 C174.00514,195.508197 174.646894,195.182769 175.325267,195.016024 C176.969387,193.786041 178.72763,192.76147 180.600001,191.942308 C187.200034,189.242294 193.049976,189.992287 198.150001,194.192308 C199.95001,195.392314 201.299997,197.042297 202.200001,199.142308 C203.400007,201.54232 203.400007,203.642299 202.200001,205.442308 C200.999995,207.242317 199.200013,208.442305 196.800001,209.042308 L194.100001,209.042308 C190.199982,208.742306 186.900015,210.39229 184.200001,213.992308 L181.500001,218.042308 C175.499971,227.642356 170.550021,237.542257 166.650001,247.742308 C166.049998,248.942314 165.450004,250.742296 164.850001,253.142308 C165.750006,253.742311 166.424999,253.81731 166.875001,253.367308 C167.325004,252.917306 167.849998,252.542309 168.450001,252.242308 C170.850013,249.842296 173.324989,247.517319 175.875001,245.267308 C178.425014,243.017297 180.899989,240.542321 183.300001,237.842308 L208.500001,207.242308 C210.30001,204.842296 211.799995,202.44232 213.000001,200.042308 C214.200007,197.642296 215.249997,195.092321 216.150001,192.392308 C220.350022,177.092231 224.62498,162.017382 228.975001,147.167308 C233.325023,132.317234 238.049976,117.392383 243.150001,102.392308 C247.650024,88.8922405 252.524975,75.7673717 257.775001,63.017308 C263.025028,50.2672442 268.649971,37.592371 274.650001,24.992308 C275.850007,22.592296 276.899997,20.1173207 277.800001,17.567308 C278.700006,15.0172952 279.749995,12.54232 280.950001,10.142308 C281.550004,8.64230049 282.224998,7.29231399 282.975001,6.09230799 C283.725005,4.89230199 284.549997,3.69231399 285.450001,2.49230799 C286.950009,0.692298987 288.749991,-0.132692763 290.850001,0.0173079873 C292.950012,0.167308737 294.599995,1.29229749 295.800001,3.39230799 C296.700006,4.59231399 297.449998,6.69229299 298.050001,9.69230799 C298.650004,12.9923245 298.800003,16.142293 298.500001,19.142308 C298.2,22.142323 297.750004,25.2922915 297.150001,28.592308 C295.649994,38.4923575 293.475016,48.24226 290.625001,57.842308 C287.774987,67.442356 284.550019,77.04226 280.950001,86.642308 C275.849976,100.142375 270.45003,113.567241 264.750001,126.917308 C259.049973,140.267375 252.900034,153.542242 246.300001,166.742308 C244.199991,170.642327 242.100012,174.467289 240.000001,178.217308 C237.899991,181.967327 235.800012,185.792288 233.700001,189.692308 C232.799997,191.192315 231.900006,192.617301 231.000001,193.967308 C230.099997,195.317315 229.350004,196.7423 228.750001,198.242308 C223.949977,214.74239 219.300024,231.167226 214.800001,247.517308 C210.299979,263.86739 206.250019,280.592222 202.650001,297.692308 C200.549991,306.692353 198.67501,315.767262 197.025001,324.917308 C195.374993,334.067354 193.500012,343.142263 191.400001,352.142308 C190.499997,356.342329 190.050001,360.392288 190.050001,364.292308 C190.050001,365.192312 190.2,366.092303 190.500001,366.992308 L191.400001,369.692308 C192.300006,371.792318 191.700012,373.5923 189.600001,375.092308 C187.499991,376.592315 185.55001,377.042311 183.750001,376.442308 C181.649991,375.542303 180.150006,374.042318 179.250001,371.942308 C178.049995,368.942293 177.749998,365.342329 178.350001,361.142308 C178.650003,359.042297 178.95,357.017318 179.250001,355.067308 C179.550003,353.117298 179.999998,351.092318 180.600001,348.992308 C181.800007,342.692276 182.924996,336.392339 183.975001,330.092308 C185.025007,323.792276 186.299994,317.492339 187.800001,311.192308 C190.500015,297.392239 193.274987,283.667376 196.125001,270.017308 C198.975016,256.36724 202.199983,242.792375 205.800001,229.292308 L205.800001,226.592308 L204.900001,227.492308 C202.499989,229.89232 200.325011,232.292296 198.375001,234.692308 C196.424992,237.09232 194.400012,239.492296 192.300001,241.892308 C188.999985,245.192324 185.850016,248.417292 182.850001,251.567308 C179.849986,254.717324 176.700018,257.942291 173.400001,261.242308 C172.499997,262.142312 171.15001,263.192302 169.350001,264.392308 C166.049985,266.492318 162.675019,266.942314 159.225001,265.742308 C155.774984,264.542302 153.300009,262.142326 151.800001,258.542308 C150.599995,255.542293 150.15,252.242326 150.450001,248.642308 C151.669384,239.061447 154.203669,229.834685 158.052891,220.96193 Z M114.900001,233.792308 L114.000001,232.892308 C109.199977,230.492296 106.800001,225.992341 106.800001,219.392308 L106.800001,216.692308 C106.800001,216.092305 106.875001,215.642309 107.025001,215.342308 C107.175002,215.042306 106.800006,214.742309 105.900001,214.442308 C103.499989,219.542333 101.700007,224.642282 100.500001,229.742308 C99.2999953,234.842333 98.2500058,239.942282 97.3500013,245.042308 C97.0499998,246.242314 96.9000013,247.442308 96.9000013,248.642308 C96.9000013,249.842314 97.3499968,251.1923 98.2500013,252.692308 C102.450022,250.292296 105.67499,247.442324 107.925001,244.142308 C110.175013,240.842291 112.499989,237.542324 114.900001,234.242308 L114.900001,233.792308 Z M123.900001,200.042308 C122.999997,200.042308 122.550001,200.192306 122.550001,200.492308 C119.249985,204.692329 116.850009,209.642279 115.350001,215.342308 C115.05,216.242312 114.975001,217.217303 115.125001,218.267308 C115.275002,219.317313 115.350001,220.442302 115.350001,221.642308 C115.350001,223.142315 116.249992,224.042306 118.050001,224.342308 C119.250007,224.642309 120.149998,224.192314 120.750001,222.992308 C123.750016,216.092273 125.250001,209.492339 125.250001,203.192308 C125.250001,202.592305 124.950004,201.692314 124.350001,200.492308 L123.900001,200.042308 Z M236.850001,166.742308 L246.750001,146.942308 C251.850027,135.842252 256.799977,124.742363 261.600001,113.642308 C266.400025,102.542252 270.89998,91.292365 275.100001,79.892308 C278.400018,70.892263 281.324989,61.7423545 283.875001,52.442308 C286.425014,43.1422615 288.299995,33.692356 289.500001,24.092308 L289.500001,17.342308 C288.899998,18.542314 288.450003,19.3673057 288.150001,19.817308 C287.85,20.2673102 287.550003,20.792305 287.250001,21.392308 C286.649998,22.8923155 286.050004,24.4672997 285.450001,26.117308 C284.849998,27.7673162 284.250004,29.3423005 283.650001,30.842308 C277.649971,45.24238 272.100027,59.7922345 267.000001,74.492308 C261.899976,89.1923815 257.100024,104.192231 252.600001,119.492308 C251.999998,122.192321 250.87501,125.867285 249.225001,130.517308 C247.574993,135.167331 245.85001,139.892284 244.050001,144.692308 C242.249992,149.492332 240.675008,153.992287 239.325001,158.192308 C237.974995,162.392329 237.150003,165.2423 236.850001,166.742308 Z M323.250001,132.992308 C319.949985,135.992323 316.500019,140.417279 312.900001,146.267308 C309.299983,152.117337 304.800028,160.742251 299.400001,172.142308 C298.799998,173.642315 298.125005,175.2173 297.375001,176.867308 C296.624998,178.517316 296.100003,180.542296 295.800001,182.942308 C301.800031,176.342275 307.124978,169.592342 311.775001,162.692308 C316.425025,155.792273 320.249986,148.442347 323.250001,140.642308 C324.450007,138.242296 324.750004,135.992318 324.150001,133.892308 L323.250001,132.992308 Z M424.050001,166.742308 L433.950001,146.942308 C439.050027,135.842252 443.999977,124.742363 448.800001,113.642308 C453.600025,102.542252 458.09998,91.292365 462.300001,79.892308 C465.600018,70.892263 468.524989,61.7423545 471.075001,52.442308 C473.625014,43.1422615 475.499995,33.692356 476.700001,24.092308 L476.700001,17.342308 C476.099998,18.542314 475.650003,19.3673057 475.350001,19.817308 C475.05,20.2673102 474.750003,20.792305 474.450001,21.392308 C473.849998,22.8923155 473.250004,24.4672997 472.650001,26.117308 C472.049998,27.7673162 471.450004,29.3423005 470.850001,30.842308 C464.849971,45.24238 459.300027,59.7922345 454.200001,74.492308 C449.099976,89.1923815 444.300024,104.192231 439.800001,119.492308 C439.199998,122.192321 438.07501,125.867285 436.425001,130.517308 C434.774993,135.167331 433.05001,139.892284 431.250001,144.692308 C429.449992,149.492332 427.875008,153.992287 426.525001,158.192308 C425.174995,162.392329 424.350003,165.2423 424.050001,166.742308 Z" id="path-1" /> </defs> <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"> <g className="animate-path-container" id="coded-2" transform="translate(0.899999, 0.057692)"> <mask id="mask-2" fill="white"> <use xlinkHref="#path-1" /> </mask> <use id="Mask" fill="#000000" fillRule="nonzero" xlinkHref="#path-1" /> <path d="M63.7145677,214.442308 C66.9791341,206.342308 53.3962916,188.650273 49.4202686,188.5 C45.4442456,188.349727 33.367253,191.722196 28.4764138,200.042308 C27.8521392,201.104301 19.1485977,215.29731 16.0921186,224.432309 C13.0356396,233.567308 6.76666634,250.627509 6.76666634,261.093402 C6.76666634,271.559295 8.06679277,283.210886 16.0921186,279.117882 C21.4423359,276.389213 45.9028357,254.830688 89.473618,214.442308 L105.900001,195.668676 C94.9490791,220.934431 89.473618,237.1017 89.473618,244.170484 C89.473618,254.773659 90.128108,264.046271 102.087208,257.44832 C110.059942,253.049687 117.780873,242.04435 125.250001,224.432309 C130.139453,210.195013 131.361816,201.715677 128.91709,198.994302 C125.250001,194.912239 125.392406,194.917161 120.150001,204.679734 C114.907596,214.442308 109.95,228.107461 115.050001,228.107461 C120.150001,228.107461 135.224165,228.016124 150.36,218.026123 C160.450557,211.366122 170.459131,202.57606 180.385721,191.655937 C184.870186,193.646851 189.627016,196.442308 194.65621,200.042308 C202.200001,205.442308 192.211972,197.12216 184.184282,204.679734 C176.156593,212.237309 158.422868,236.447906 158.422868,252.692308 C158.422868,268.93671 162.398891,262.204333 168.743508,257.44832 C172.973253,254.277645 188.311593,237.842308 214.758528,208.142308 L236.850001,172.001648 C255.093559,139.909267 265.948052,118.559615 269.413479,107.952692 C272.878907,97.3457694 279.574415,78.4041093 289.500001,51.1277118 C297.285501,18.0657879 297.285501,4.16940624 289.500001,9.43856694 C281.714501,14.7077276 263.068862,64.217308 233.563084,157.967308 C216.696111,214.840397 206.682773,251.830198 203.523072,268.93671 C198.78352,294.596478 184.184282,355.13982 184.184282,361.604994 C184.184282,365.91511 185.989522,370.410882 189.600001,375.092308" id="Path-49" stroke="#FFFFFF" strokeWidth={17} strokeLinecap="round" strokeLinejoin="round" mask="url(#mask-2)" /> <path d="M289.500001,191.722196 C298.650003,188.534162 307.838117,181.982416 318.093755,166.742308 C328.349392,151.5022 333.776829,128.043191 324.450004,128.043191 C311.325001,130.967308 304.041756,148.474087 298.650003,157.967308 C285.929579,180.364066 269.491487,226.939711 269.491487,240.180277 C269.491487,253.420844 273.160207,268.248825 285.849441,268.248825 C299.713539,268.248825 317.372277,250.575094 343.790166,224.432309 C353.921257,210.65444 366.526757,198.994302 369.289769,198.994302 C372.05278,198.994302 372.05278,194.320142 383.616585,200.042308 C376.519134,201.860161 371.743529,203.998941 369.289769,206.458648 C365.609128,210.148207 354.88035,224.980729 351.466044,234.228202 C348.497125,242.269368 338.438373,260.199861 349.751837,260.199861 C361.065301,260.199861 377.132389,237.463643 383.616585,228.107461 C390.100781,218.751278 388.850624,222.826321 420.076857,181.929806 C438.498467,154.804521 446.571066,131.593736 450.375001,122.963726 C454.178936,114.333716 466.183886,81.2157891 479.92995,42.3223101 C486,25.8107045 485.62995,3.77264916 479.92995,4.96613203 C474.22995,6.1596149 453.450001,54.2577979 424.050001,142.488778 L391.795562,264.558985 C379.423526,321.730379 373.237508,354.445448 373.237508,362.704192 C373.237508,370.962936 374.425006,375.092308 376.800001,375.092308" id="Path-50" stroke="#FFFFFF" strokeWidth={15} strokeLinecap="round" strokeLinejoin="round" mask="url(#mask-2)" /> </g> </g> </svg> 
	}
	
	componentDidMount(){
		window.scrollTo(0,0);
		document.body.querySelector(".website-app").classList.add("page-black");


		GeneralAnimations.prepareGeneralAnimations();
    	// setTimeout(GeneralAnimations.animateGeneralElements, 1000);
		GeneralAnimations.iniObserver();
		// new CustomScroll();
	}

	componentWillUnmount() {
		document.body.querySelector(".website-app").classList.remove("page-black");
	}

	componentDidUpdate(){
		GeneralAnimations.iniObserver();
	}


	render(){
		return(
			<section className="page page-about bg-color-black">
				<SEO data={this.props.data.seo} routeParams={this.props.routeParams}/>

				<Ornaments all={true}/>
				<SpecialText text={this.props.data.specialText.text} />
				<Text title={this.state.dataText.title} extraClass="small-width"/>
				<Image img={cover} />
				{/*<Parallax />*/}
				<ArrowTitle title={this.props.data.arrowTitle2} color="white"/>
				<TextList dataList={this.state.dataList}/>
				<ArrowTitle title={this.props.data.arrowTitle3} color="white"/>
				<JoinUs title={this.state.joinUsData.title} description={this.state.joinUsData.description} careers={this.props.data.careers}/>
				<NextSection text={this.state.nextSectionData.text} link={this.state.nextSectionData.link}/>
				
			</section>
		);
	}
}


export default pageAbout;
