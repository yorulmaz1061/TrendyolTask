package com.trendyol.pages;

import com.trendyol.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegistrationPage extends BasePage {

    public RegistrationPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//p[.='Giriş Yap']")
    public WebElement GirisYap;

    @FindBy(css = "#login-email")
    public WebElement Eposta;

    @FindBy(id = "#login-password-input")
    public WebElement Sifre;

    @FindBy(css = ".q-primary")
    public WebElement GirisYapRegistration;

    @FindBy(css = ".right.q-secondary")
    public WebElement UyeOlButton;

    @FindBy(css = "svg")
    public WebElement Cerez;

   // @FindBy(xpath = "//body[@class='gender-popup-lock']\n")



}
