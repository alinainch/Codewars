function DNAtoRNA(dna) {
  return dna.replaceAll('T', 'U')
}

//DNA HAS GCAT
//RNA HAS NO T -> CONVERT TO U 
//given string, return RNA string. replace t with u 