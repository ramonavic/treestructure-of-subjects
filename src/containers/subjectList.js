import React from 'react';
import TopSubject from '../components/topSubject';
import SecondSubject from '../components/secondSubject';
import ThirdSubject from '../components/thirdSubject'

class SubjectList extends React.Component {
  constructor() {
    super();

    this.state = {
      subjects:
      [{"id":"4826","subject":"Tijd van jagers en boeren","parent_subject_id":"0"}, {"id":"4828","subject":"De eerste mensen","parent_subject_id":"4826"}, {"id":"4830","subject":"Het scheppingsverhaal","parent_subject_id":"4828"}, {"id":"4832","subject":"Evolutietheorie","parent_subject_id":"4828"}, {"id":"4834","subject":"Homo sapiens","parent_subject_id":"4828"}, {"id":"4836","subject":"Levenswijze van jagers en verzamelaars","parent_subject_id":"4826"}, {"id":"4838","subject":"Jagen en verzamelen","parent_subject_id":"4836"}, {"id":"4840","subject":"Werken met steen","parent_subject_id":"4836"}, {"id":"4842","subject":"Samenleving","parent_subject_id":"4836"}, {"id":"4844","subject":"Ontstaan van landbouw en landbouwsamenlevingen","parent_subject_id":"4826"}, {"id":"4846","subject":"Ontstaan van landbouw","parent_subject_id":"4844"}, {"id":"4848","subject":"Ontstaan van landbouwsamenlevingen","parent_subject_id":"4844"}, {"id":"4850","subject":"Ontstaan van de eerste stedelijke gemeenschappen","parent_subject_id":"4826"}, {"id":"4852","subject":"Egyptenaren","parent_subject_id":"4826"}, {"id":"4854","subject":"Landbouwsamenlevingen in Egypte","parent_subject_id":"4852"}, {"id":"4856","subject":"Het bestuur van de Egyptenaren","parent_subject_id":"4852"}, {"id":"4858","subject":"De cultuur van de Egyptenaren","parent_subject_id":"4852"}, {"id":"4860","subject":"De samenleving van de Egyptenaren","parent_subject_id":"4852"}, {"id":"4862","subject":"De dynastie van Egypte","parent_subject_id":"4852"}, {"id":"4864","subject":"Tempels en pyramides","parent_subject_id":"4852"}, {"id":"4866","subject":"Tijd van Grieken en Romeinen","parent_subject_id":"0"}, {"id":"4868","subject":"Burgerschap en wetenschappelijk denken in de Griekse stadstaat","parent_subject_id":"4866"}, {"id":"4870","subject":"Griekse samenleving","parent_subject_id":"4868"}, {"id":"4872","subject":"De Griekse maatschappij","parent_subject_id":"4870"}, {"id":"4874","subject":"De Griekse democratie","parent_subject_id":"4870"}, {"id":"4876","subject":"Griekse cultuur","parent_subject_id":"4868"}, {"id":"4878","subject":"Griekse goden","parent_subject_id":"4876"}, {"id":"4880","subject":"Griekse filosofen","parent_subject_id":"4876"}, {"id":"4882","subject":"Olympische Spelen","parent_subject_id":"4876"}, {"id":"4884","subject":"Griekse kunstenaars en architecten","parent_subject_id":"4876"}, {"id":"4886","subject":"Groei van het Romeinse Rijk","parent_subject_id":"4866"}, {"id":"4888","subject":"Opkomst van het Romeinse Rijk","parent_subject_id":"4886"}, {"id":"4890","subject":"Het Romeinse Rijk","parent_subject_id":"4886"}, {"id":"4892","subject":"Romeinse samenleving","parent_subject_id":"4896"}, {"id":"4894","subject":"Bestuur van het Romeinse Rijk","parent_subject_id":"4890"}, {"id":"4896","subject":"Romeinse cultuur","parent_subject_id":"4886"}, {"id":"4898","subject":"Romeinse goden","parent_subject_id":"4896"}, {"id":"4900","subject":"Verspreiding Grieks-Romeinse cultuur","parent_subject_id":"4886"}, {"id":"4902","subject":"Ontstaan van het christendom","parent_subject_id":"4866"}, {"id":"4904","subject":"Het christendom in het Romeinse Rijk","parent_subject_id":"4902"}, {"id":"4906","subject":"Ontwikkeling van het jodendom","parent_subject_id":"4904"}, {"id":"4908","subject":"Ontwikkeling van het christendom","parent_subject_id":"4904"}, {"id":"4910","subject":"Confrontatie met de Germaanse cultuur","parent_subject_id":"4866"}, {"id":"4912","subject":"Germanen","parent_subject_id":"4910"}, {"id":"4914","subject":"Crisis in het Romeinse Rijk","parent_subject_id":"4910"}, {"id":"4916","subject":"Tijd van de monniken en de ridders","parent_subject_id":"0"}, {"id":"4918","subject":"Opkomst van het Frankische Rijk","parent_subject_id":"4916"}, {"id":"4920","subject":"Feodale verhoudingen","parent_subject_id":"4916"}, {"id":"4922","subject":"Hofstelsel en horigheid","parent_subject_id":"4916"}, {"id":"4924","subject":"Onveilige samenleving","parent_subject_id":"4922"}, {"id":"4926","subject":"Standenmaatschappij","parent_subject_id":"4922"}, {"id":"4928","subject":"Verspreiding van het christendom in Europa","parent_subject_id":"4916"}, {"id":"4930","subject":"Germaanse geloof en het christendom","parent_subject_id":"4928"}, {"id":"4932","subject":"Missionarissen","parent_subject_id":"4928"}, {"id":"4934","subject":"Macht van de paus","parent_subject_id":"4928"}, {"id":"4936","subject":"Monniken en kloosters","parent_subject_id":"4928"}, {"id":"4938","subject":"Ontstaan en verspreiding van de islam","parent_subject_id":"4916"}, {"id":"4940","subject":"De islam","parent_subject_id":"4938"}, {"id":"4942","subject":"Arabische veroveringen","parent_subject_id":"4938"}, {"id":"4944","subject":"Arabische cultuur","parent_subject_id":"4938"}, {"id":"4946","subject":"Tijd van de steden en staten","parent_subject_id":"0"}, {"id":"4948","subject":"Opkomst van handel en ontstaan van steden","parent_subject_id":"4946"}, {"id":"4950","subject":"Verbetering van de landbouw","parent_subject_id":"4948"}, {"id":"4952","subject":"Herstel handel en steden","parent_subject_id":"4948"}, {"id":"4954","subject":"Strijd tussen kerk en staat","parent_subject_id":"4946"}, {"id":"4956","subject":"Rijkdom en liefdadigheid van de katholieke kerk","parent_subject_id":"4954"}, {"id":"4958","subject":"Inquisitie","parent_subject_id":"4954"}, {"id":"4960","subject":"Conflict tussen koning en paus","parent_subject_id":"4954"}, {"id":"4962","subject":"Begin van staatsvorming en centralisatie","parent_subject_id":"4946"}, {"id":"4964","subject":"Honderdjarige Oorlog","parent_subject_id":"4962"}, {"id":"4966","subject":"Centralisatie","parent_subject_id":"4962"}, {"id":"4968","subject":"Nederlanden","parent_subject_id":"4962"}, {"id":"4970","subject":"Stedelijke burgerij","parent_subject_id":"4946"}, {"id":"4972","subject":"Stadsrechten","parent_subject_id":"4970"}, {"id":"4974","subject":"Rijk en arm in de stad","parent_subject_id":"4970"}, {"id":"4976","subject":"Het bestuur van de stad","parent_subject_id":"4970"}, {"id":"4978","subject":"Kruistochten","parent_subject_id":"4946"}, {"id":"4980","subject":"Constantinopol en Jeruzalem","parent_subject_id":"4978"}, {"id":"4982","subject":"Ridderorden","parent_subject_id":"4978"}, {"id":"4984","subject":"Kinderkruistochten","parent_subject_id":"4978"}, {"id":"4986","subject":"Tijd van ontdekkers en hervormers","parent_subject_id":"0"}, {"id":"4988","subject":"Begin van de overzeese Europese expansie","parent_subject_id":"4986"}, {"id":"4990","subject":"Noodzaak voor nieuwe zeeroutes","parent_subject_id":"4988"}, {"id":"4992","subject":"Zuidelijke route naar Indi\u00eb","parent_subject_id":"4988"}, {"id":"4994","subject":"Westelijke route naar Indi\u00eb","parent_subject_id":"4988"}, {"id":"4996","subject":"Een Nieuwe Wereld","parent_subject_id":"4988"}, {"id":"4998","subject":"Spaanse veroveringen in Amerika","parent_subject_id":"4988"}, {"id":"5000","subject":"Veranderd mens- en wereldbeeld in de Renaissance","parent_subject_id":"4986"}, {"id":"5002","subject":"Hernieuwde interesse in de klassieke oudheid","parent_subject_id":"5000"}, {"id":"5004","subject":"Kennis","parent_subject_id":"5000"}, {"id":"5006","subject":"Kunst","parent_subject_id":"5040"}, {"id":"5008","subject":"Humanisme","parent_subject_id":"5000"}, {"id":"5010","subject":"De Reformatie en de splitsing in de christelijke kerk","parent_subject_id":"4986"}, {"id":"5012","subject":"Protestantisme","parent_subject_id":"5010"}, {"id":"5014","subject":"Calvinisme","parent_subject_id":"5010"}, {"id":"5016","subject":"Wederdopers","parent_subject_id":"5010"}, {"id":"5018","subject":"De Opstand en het ontstaan van een onafhankelijke Nederlandse staat","parent_subject_id":"4986"}, {"id":"5020","subject":"De Opstand","parent_subject_id":"5018"}, {"id":"5022","subject":"Een onafhankelijke Nederlandse staat","parent_subject_id":"5018"}, {"id":"5024","subject":"Tijd van regenten en vorsten","parent_subject_id":"0"}, {"id":"5026","subject":"Streven naar absolute macht","parent_subject_id":"5024"}, {"id":"5028","subject":"Absolutisme","parent_subject_id":"5026"}, {"id":"5030","subject":"Bestuur in de Nederlanden","parent_subject_id":"5026"}, {"id":"5032","subject":"Bestuur in Nederland","parent_subject_id":"5026"}, {"id":"5034","subject":"Wereldwijde handelscontacten","parent_subject_id":"5024"}, {"id":"5036","subject":"VOC","parent_subject_id":"5034"}, {"id":"5038","subject":"WIC","parent_subject_id":"5034"}, {"id":"5040","subject":"Gouden Eeuw","parent_subject_id":"5024"}, {"id":"5042","subject":"Amsterdam","parent_subject_id":"5040"}, {"id":"5044","subject":"Antwerpen","parent_subject_id":"5040"}, {"id":"5046","subject":"Armoede","parent_subject_id":"5040"}, {"id":"5048","subject":"Straffen","parent_subject_id":"5040"}, {"id":"5050","subject":"Rijkdom","parent_subject_id":"5040"}, {"id":"5052","subject":"Stadhuis op de Dam","parent_subject_id":"5006"}, {"id":"5054","subject":"Wetenschappelijke revolutie","parent_subject_id":"5024"}, {"id":"5056","subject":"Tijd van pruiken en revoluties","parent_subject_id":"0"}, {"id":"5058","subject":"De Verlichting","parent_subject_id":"5056"}, {"id":"5060","subject":"Andere idee\u00ebn over de politiek","parent_subject_id":"5058"}, {"id":"5062","subject":"Andere idee\u00ebn over de godsdienst","parent_subject_id":"5058"}, {"id":"5064","subject":"De Franse Revolutie","parent_subject_id":"5056"}, {"id":"5066","subject":"Oorzaken van de Franse Revolutie","parent_subject_id":"5064"}, {"id":"5068","subject":"Bestorming van de Bastille","parent_subject_id":"5064"}, {"id":"5070","subject":"Terreur","parent_subject_id":"5064"}, {"id":"5072","subject":"Napoleon","parent_subject_id":"5064"}, {"id":"5074","subject":"Gevolgen van de Franse Revolutie","parent_subject_id":"5064"}, {"id":"5076","subject":"Bataafse Republiek","parent_subject_id":"5056"}, {"id":"5078","subject":"Patriotten","parent_subject_id":"5076"}, {"id":"5080","subject":"Napoleon en Nederland","parent_subject_id":"5076"}, {"id":"5082","subject":"De Amerikaanse Revolutie","parent_subject_id":"5056"}, {"id":"5084","subject":"Amerika als kolonie","parent_subject_id":"5082"}, {"id":"5086","subject":"De Onafhankelijkheidsverklaring","parent_subject_id":"5082"}, {"id":"5088","subject":"De verovering van het Westen","parent_subject_id":"5082"}, {"id":"5090","subject":"Slavernij","parent_subject_id":"5056"}, {"id":"5092","subject":"Slavernij in de Verenigde Staten","parent_subject_id":"5090"}, {"id":"5094","subject":"Slavernij in Suriname","parent_subject_id":"5090"}, {"id":"5096","subject":"Afschaffing van de slavernij","parent_subject_id":"5090"}, {"id":"5098","subject":"Tijd van burgers en stoommachines","parent_subject_id":"0"}, {"id":"5100","subject":"Koninkrijk der Nederlanden","parent_subject_id":"5098"}, {"id":"5102","subject":"Koning Willem I","parent_subject_id":"5100"}, {"id":"5104","subject":"Grondwet van 1848","parent_subject_id":"5100"}, {"id":"5106","subject":"Industri\u00eble revolutie","parent_subject_id":"5098"}, {"id":"5108","subject":"Fabrieksarbeiders","parent_subject_id":"5106"}, {"id":"5110","subject":"Verstedelijking","parent_subject_id":"5106"}, {"id":"5112","subject":"Sociale kwestie","parent_subject_id":"5098"}, {"id":"5114","subject":"Kinderarbeid","parent_subject_id":"5112"}, {"id":"5116","subject":"Politiek-maatschappelijke stromingen","parent_subject_id":"5098"}, {"id":"5118","subject":"Voortschrijdende democratisering","parent_subject_id":"5116"}, {"id":"5120","subject":"Socialisten","parent_subject_id":"5116"}, {"id":"5122","subject":"Confessionelen","parent_subject_id":"5116"}, {"id":"5124","subject":"Liberalen","parent_subject_id":"5116"}, {"id":"5126","subject":"Feministen","parent_subject_id":"5116"}, {"id":"5128","subject":"Uitbreiding kiesrecht","parent_subject_id":"5118"}, {"id":"5130","subject":"Modern imperialisme","parent_subject_id":"5098"}, {"id":"5132","subject":"Tweede Industri\u00eble Revolutie","parent_subject_id":"5130"}, {"id":"5134","subject":"Wereldtentoonstelling","parent_subject_id":"5130"}, {"id":"5136","subject":"Concurrentie tussen de Europese landen","parent_subject_id":"5130"}, {"id":"5138","subject":"Rusland","parent_subject_id":"5130"}, {"id":"5140","subject":"Europese koloni\u00ebn","parent_subject_id":"5130"}, {"id":"5142","subject":"Nederlands-Indi\u00eb","parent_subject_id":"5140"}, {"id":"5144","subject":"Tijd van de wereldoorlogen","parent_subject_id":"0"}, {"id":"5146","subject":"Eerste Wereldoorlog","parent_subject_id":"5144"}, {"id":"5148","subject":"Het leven voor de Eerste Wereldoorlog","parent_subject_id":"5146"}, {"id":"5150","subject":"Oorzaken van de Eerste Wereldoorlog","parent_subject_id":"5146"}, {"id":"5152","subject":"Verloop van de Eerste Wereldoorlog","parent_subject_id":"5146"}, {"id":"5154","subject":"Einde van de Eerste Wereldoorlog","parent_subject_id":"5146"}, {"id":"5156","subject":"Interbellum","parent_subject_id":"5144"}, {"id":"5158","subject":"Vrede van Versailles","parent_subject_id":"5156"}, {"id":"5160","subject":"Crisis","parent_subject_id":"5156"}, {"id":"5162","subject":"Duitsland","parent_subject_id":"5156"}, {"id":"5164","subject":"Tweede Wereldoorlog","parent_subject_id":"5144"}, {"id":"5166","subject":"Begin van de Tweede Wereldoorlog","parent_subject_id":"5164"}, {"id":"5168","subject":"Verloop van de Tweede Wereldoorlog","parent_subject_id":"5164"}, {"id":"5170","subject":"Antisemitisme","parent_subject_id":"5168"}, {"id":"5172","subject":"Einde van de Tweede Wereldoorlog","parent_subject_id":"5164"}, {"id":"5174","subject":"Oorlog in Nederland","parent_subject_id":"5164"}, {"id":"5176","subject":"Oorlog in Nederlands-Indi\u00eb","parent_subject_id":"5164"}, {"id":"5178","subject":"Tijd van televisie en computer","parent_subject_id":"0"}, {"id":"5180","subject":"Koude Oorlog","parent_subject_id":"5178"}, {"id":"5182","subject":"Communisme en kapitalisme","parent_subject_id":"5180"}, {"id":"5184","subject":"Berlijn","parent_subject_id":"5180"}, {"id":"5186","subject":"Bewapeningswedloop","parent_subject_id":"5180"}, {"id":"5188","subject":"Einde van de Koude Oorlog","parent_subject_id":"5180"}, {"id":"5190","subject":"Toenemende Westerse welvaart","parent_subject_id":"5178"}, {"id":"5192","subject":"Wederopbouw","parent_subject_id":"5190"}, {"id":"5194","subject":"Jaren 60","parent_subject_id":"5190"}, {"id":"5196","subject":"Ontwikkeling van multiculturele samenlevingen","parent_subject_id":"5190"}, {"id":"5198","subject":"Veel culturen in de polder","parent_subject_id":"5196"}, {"id":"5200","subject":"Een veiligere wereld","parent_subject_id":"5178"}, {"id":"5202","subject":"Verenigde Naties","parent_subject_id":"5200"}, {"id":"5204","subject":"NAVO","parent_subject_id":"5200"}, {"id":"5206","subject":"Oorlog tegen terrorisme","parent_subject_id":"5200"}, {"id":"5208","subject":"Het Midden-Oosten","parent_subject_id":"5178"}, {"id":"5210","subject":"Palestina","parent_subject_id":"5208"}, {"id":"5212","subject":"Moslimfundamentalisme","parent_subject_id":"5208"}, {"id":"5214","subject":"De macht in Nederland","parent_subject_id":"5178"}, {"id":"5216","subject":"Parlement","parent_subject_id":"5214"}, {"id":"5218","subject":"Opkomen voor je rechten","parent_subject_id":"5214"}, {"id":"5220","subject":"Politieke partijen","parent_subject_id":"5214"}, {"id":"5222","subject":"Rechtsstaat","parent_subject_id":"5214"}, {"id":"6202","subject":"Kunst","parent_subject_id":"5000"}],
      topSubjects: [],
      secondSubjects: [],
      thirdSubjects: []

    }
  }

    renderTopSubjects() {
      let component = this;

      {component.state.subjects.map(function(subject){

          if (subject.parent_subject_id == 0) {
            return(
              component.state.topSubjects.push(subject)

            )}


        }, this)}

    }

    renderSecondSubjects() {
      let component = this;

      component.state.subjects.map(function(subject) {
        component.state.topSubjects.map(function(topSubject) {

          if ( topSubject.id == subject.parent_subject_id ) {

            return (
            component.state.secondSubjects.push(subject)
            )

          }
        })

      })


    }

    renderThirdSubjects() {
      let component = this;

      component.state.subjects.map(function(subject){
        component.state.secondSubjects.map(function(secondSubject) {

          if ( secondSubject.id == subject.parent_subject_id) {
            return (
              component.state.thirdSubjects.push(subject)
            )

            }

        })

      })
    }

    componentWillMount() {
      this.renderTopSubjects();
      this.renderSecondSubjects();
      this.renderThirdSubjects();
    }




  render() {
    let component = this;
    console.log(this.state.topSubjects)
    return(

      <div>
        {this.state.subjects.map(function(subject){
          if (component.state.topSubjects.includes(subject)) {
            return(
              <TopSubject key={subject.id} title={subject.subject}/>
            )
          } else if (component.state.secondSubjects.includes(subject)) {
            return(
              <SecondSubject key={subject.id} title={subject.subject} />
            )
          } else if (component.state.thirdSubjects.includes(subject)) {
            return(
              <ThirdSubject key={subject.id} title={subject.subject} />
            )
          }
       })

     }
      </div>
    )
  }




}


export default SubjectList;
