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

    @FindBy(xpath = "//input[@id='register-email']")
    public WebElement Eposta;

    @FindBy(xpath = "//input[@id='register-password-input']")
    public WebElement Sifre;

    @FindBy(css = ".q-primary > span")
    public WebElement UyeOliki;

    @FindBy(css = ".right.q-secondary")
    public WebElement UyeOlButton1;

    @FindBy(css = "svg")
    public WebElement Cerez;

    @FindBy(xpath = "//label[.='Cinsiyet (Opsiyonel)']")
    public WebElement Cinsiyet;

    @FindBy(xpath = "//div[.='facebook']")
    public WebElement Facebook;

    @FindBy(xpath = "//div[.='google']")
    public WebElement Google;

    @FindBy(xpath = "//span[@class='message']")
    public WebElement ValidationError;

    //span[@class='message']






}
