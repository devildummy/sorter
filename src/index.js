class Sorter {
  constructor() {
    this.Sorter=Sorter;
  }

  add(element) {
    if(!this.elements)
    this.elements=[];
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    let temp=[],fn;

    if(!this.compareFunction){
      fn = function(a,b){
        return a-b;
      };
    }else{
      fn=this.compareFunction;
    }

    indices.sort(function(a,b){return a-b;});
    for (let i=0;i<indices.length;i++){
      temp.push(this.elements[indices[i]]);
    }

    temp.sort(fn);

    for (let i=0;i<indices.length;i++){
      this.elements[indices[i]]=temp[i];
    }

  return this.elements;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;