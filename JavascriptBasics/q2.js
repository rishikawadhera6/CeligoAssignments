const MetadataParser = function(version,channel,keyField){
    this._version = version;
    this._channel = channel;
    this._keyField = keyField;
}
MetadataParser.prototype.setVersion = function(version){
    this._version = version;
}

MetadataParser.prototype.getVersion = function(){
    return this._version;
}

MetadataParser.prototype.setChannel = function(channel){
    this._channel = channel;
}

MetadataParser.prototype.getChannel = function(){
    return this._channel;
}

MetadataParser.prototype.setkeyField = function(keyField){
    this._keyField = keyField; 
}

MetadataParser.prototype.getkeyField = function(){
    return this._keyField;
}

const dataParserobject = new MetadataParser("1.0.0",1,"Name");
console.log(dataParserobject)

dataParserobject.setVersion("1.0.1");
dataParserobject.setkeyField("id")

console.log(dataParserobject)