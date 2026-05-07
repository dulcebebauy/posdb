const API_DESA = "https://script.google.com/macros/s/AKfycbzrWddU4SlnuaBfba45-rtqH5FKm5Nv3-JvhupAcZ-v_kS6HQGWwT4LrZ4ul8VB8VbJHg/exec";
                //"https://script.google.com/macros/s/AKfycbw5B721kgIQ32F-NIMlrU351lg-gSTsg0fqJVsXk8xesHYh6pn7MtQbjiTi47QquuTy/exec"; 
                //"https://script.google.com/macros/s/AKfycbyLNPKzt0ROtLnBE5ICTZS9hGfFmpc5GEEFmw3W5qhNMMt_gK5GoqdwAYL23MmzicZxdw/exec";

function getAPI( ambiente = "desa"){
  if(ambiente.toLowerCase() == "desa"){
    return API_DESA;
  }
  if(ambiente.toLowerCase() == "prod"){
    return API_PROD;
  }
  return false;
}
