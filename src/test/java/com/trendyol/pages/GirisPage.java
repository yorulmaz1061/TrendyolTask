package com.trendyol.pages;

import com.trendyol.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class GirisPage extends BasePage {

    public GirisPage() {
        PageFactory.initElements(Driver.get(), this);
    }
        @FindBy(xpath = "//p[.='Giriş Yap']")
        public WebElement GirisYap;

    @FindBy(css = "svg")
    public WebElement Cerez;

    @FindBy(xpath = "//input[@id='login-email']")
    public WebElement GirisYapEposta;

    @FindBy(xpath = "//input[@id='login-password-input']")
    public WebElement GirisYapSifre;

    @FindBy(xpath = "//button[@class='q-primary q-fluid q-button-medium q-button submit']")
    public WebElement GirisYapGirisYap;

    @FindBy(xpath = "//img[@src='https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15531619355211_Nike.png']")
    public WebElement NikeButton;

    @FindBy(xpath = "//a[@href='/nike/nike-u-nk-perf-ltwt-crew-3pr-3-lu-corap-sx4704-101-p-156577944']//div[@class='image-overlay-body']\n")
    public WebElement CorapButton;

    @FindBy(xpath = "//div[@class='product-button-container']//div[@class='add-to-basket-button-text']")
    public WebElement SepeteEkleButton;

    @FindBy(xpath = "//img[@src='https://cdn.dsmcdn.com/ty131/product/media/images/20210614/18/101005639/17890616/1/1_org_thumb.jpg']")
    public WebElement Corap2Button;

    @FindBy(xpath = "@FindBy(xpath = \"//div[@class='product-button-container']//div[@class='add-to-basket-button-text']\")\n" +
            "    public WebElement SepeteEkleButton;")
    public WebElement SepeteEkle2Button;

    @FindBy(xpath = "//p[.='Sepetim']")
    public WebElement Sepetim;

    @FindBy(xpath = "//img[@src='https://cdn.dsmcdn.com/ty152/product/media/images/20210731/0/114235390/58043934/1/1_org_zoom.jpg']")
    public WebElement SepetimCorap;

    @FindBy(xpath = "//img[@src='https://cdn.dsmcdn.com/ty131/product/media/images/20210614/18/101005639/17890616/1/1_org_zoom.jpg']\n")
    public WebElement SepetimCorap2;




//img[@src='https://cdn.dsmcdn.com/ty131/product/media/images/20210614/18/101005639/17890616/1/1_org_zoom.jpg']




}
