package com.trendyol.step_definitions;

import com.trendyol.pages.GirisPage;
import com.trendyol.utilities.BrowserUtils;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class AddToChart {

    GirisPage girisPage = new GirisPage();

    @And("the user enter valid email")
    public void theUserEnterValidEmail() {
        girisPage.GirisYapEposta.sendKeys("aarif2006yildiz@gmail.com");
    }

    @And("the user enter valid sifre")
    public void theUserEnterValidSifre() {
        BrowserUtils.waitFor(3);
        girisPage.GirisYapSifre.sendKeys("arif2006");
    }

    @And("the user cliks on girisyapgirisyap button")
    public void theUserCliksOnGirisyapgirisyapButton() {
        BrowserUtils.waitFor(3);
        girisPage.GirisYapGirisYap.click();
    }

    @And("the user clicks on Nike button")
    public void theUserClicksOnNikeButton() {
        girisPage.NikeButton.click();
    }

    @And("the user clicks on Corap button")
    public void theUserClicksOnCorapButton() throws InterruptedException {
        Thread.sleep(5000);
        girisPage.CorapButton.click();
    }

    @And("the user clicks on SepeteEkle button")
    public void theUserClicksOnSepeteEkleButton() throws InterruptedException {
        Thread.sleep(5000);
        girisPage.SepeteEkleButton.click();
    }

    @And("the user clicks on Corapiki button")
    public void theUserClicksOnCorapikiButton (){
        girisPage.Corap2Button.click();
    }

    @And("the user clicks on SepeteEkleiki button")
    public void theUserClicksOnSepeteEkleikiButton() {
        girisPage.SepeteEkle2Button.click();
    }

    @And("the user clicks on Sepetim button")
    public void theUserClicksOnSepetimButton() {
        girisPage.Sepetim.click();
    }

    @Then("the user should be able to display SepetimCorap Button")
    public void theUserShouldBeAbleToDisplaySepetimCorapButton() {
        Assert.assertTrue(girisPage.SepetimCorap.isDisplayed());
    }

    @And("the user should be able to display SepetimCorapiki Button")
    public void theUserShouldBeAbleToDisplaySepetimCorapikiButton() {
        Assert.assertTrue(girisPage.SepetimCorap2.isDisplayed());
    }
}
