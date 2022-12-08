import { browser,element, by } from "protractor";

describe('Prueba task',()=>{
    // codigo de configuración
    beforeEach(()=>{
        browser.get("/");
    });
    // Prueba 1
    it("la pagina home se muestra por defecto",()=>{
        expect(element(by.css(".page-selected ion-label")).getText()).toContain("Home");
    });
    // Prueba 2
  
});