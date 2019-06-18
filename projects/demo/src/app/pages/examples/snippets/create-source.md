source: LocalDataSource; // add a property to the component

constructor() {
  this.source = new LocalDataSource(this.data); // create the source
}