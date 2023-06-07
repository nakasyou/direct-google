for(const atag of document.querySelectorAll("a[href]")){
  const url = new URL(atag.href)

  if(url.protocol !== "https:" && url.protocol !== "http:"){
    continue
  }
  delete atag.dataset.jsarwt
  delete atag.dataset.ved
  delete atag.dataset.usg
}