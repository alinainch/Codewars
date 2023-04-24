class Ship {
  constructor(draft, crew){
    this.draft = draft;
    this.crew = crew;
  }
  
  isWorthIt(){
    let crewWeight = 1.5 * this.crew 
    let total = this.draft - crewWeight  
    if(total > 20 ){
      return true
    } else {
      return false
    }
  }
} 