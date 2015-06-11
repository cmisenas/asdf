function Binary(v){
  if(typeof v !== "string"){ throw "Invalid value. Value passed must be string."; }
  if(!/^[0|1]+$/.test(v)){ throw "Invalid value. Value passed must be binary (i.e. only contain 0 and 1)"; }
  this._v = v;
  this.length = v.length;
  this._setEl();
}

Binary.prototype.toDecimal = function(){
  return parseInt(this._v, 2);
};

Binary.prototype._toArray = function(){
  return this._v.split('').reverse();
};

Binary.prototype.flip = function(){
  var val='', f='';
  this.each(function(c,i){
    f = (c=='1')?'0':'1';
    val = f + val;
  });
  return val;
};

Binary.prototype._flip = function(){
  var newV='', f='', that=this;
  this.each(function(c,i,a){
    f = (c==='1')?'0':'1';
    newV = f + newV;
    that[i] = f;
  });
};

Binary.prototype._setEl = function(){
  // changing this means you're f'd
  // maybe some js metaprogramming magic sauce out there?
  var that = this;
  this.each(function(c,i){
    that[i]=c;
  });
};

Binary.prototype.each = function(fn){
  var arr=this._toArray();
  arr.forEach(function(c,i,a){
    fn(c,i,a);
  });
};

Binary.prototype.add = function(b){
  if(typeof b !== "string" && !(b instanceof Binary)){ throw "Invalid value. Value passed must be string or Binary instance."; }

  var carry = 0,
      l = Math.max(this.length, b.length),
      s = 0;
      sum = '';

  for(var i=0; i<l; i++){
    s = ((parseInt(this[i], 10) || 0) +
           (parseInt(b[i]) || 0) +
           carry);
    switch(s){
      case 3:
        sum = '1'+sum;
        carry = 1;
        break;
      case 2:
        sum = '0'+sum;
        carry = 1;
        break;
      case 1:
        sum = '1'+sum;
        carry = 0;
        break;
      case 0:
        sum = '0'+sum;
        carry = 0;
        break;
    }
  }
  if(carry===1){ sum='1'+sum; }

  return sum;
};

Binary.prototype.complement1 = function(){
  var comp='', flip=false, that=this;

  this.each(function(c,i){
    if(flip){
      comp=(that[i]==='1'?'0':'1')+comp;
    }else{
      if(that[i]==='1'){
        flip=true;
      }
      comp=that[i]+comp;
    }
  });

  return comp;
};

Binary.prototype.complement2 = function(){
  return (new Binary(this.flip())).add('1');
};

