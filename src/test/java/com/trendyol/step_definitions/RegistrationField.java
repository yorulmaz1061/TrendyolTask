package com.trendyol.step_definitions;

import com.trendyol.pages.RegistrationPage;
import com.trendyol.utilities.BrowserUtils;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import javafx.scene.control.Tab;
import org.junit.Assert;
import org.openqa.selenium.Keys;

public class RegistrationField {

    RegistrationPage registrationPage = new RegistrationPage();

    @When("the user clicks on Giris Yap button")
    public void the_user_clicks_on_Giris_Yap_button() {
        registrationPage.GirisYap.click();

    }

    @When("the user clicks on Uye Ol Tab")
    public void the_user_clicks_on_Uye_Ol_Tab() throws InterruptedException {

        BrowserUtils.waitFor(3);
        registrationPage.UyeOlButton1.click();
    }

    @Then("the user should be able to display Eposta input box")
    public void the_user_should_be_able_to_display_Eposta_input_box() throws InterruptedException {
        BrowserUtils.waitFor(3);
        Assert.assertTrue(registrationPage.Eposta.isDisplayed());
    }

    @Then("the user should be able to display Sifre input box")
    public void the_user_should_be_able_to_display_Sifre_input_box() throws InterruptedException {

        BrowserUtils.waitFor(3);
        Assert.assertTrue(registrationPage.Sifre.isDisplayed());



    }

    @Then("the user should be able to display Uye Ol button")
    public void the_user_should_be_able_to_display_Uye_Ol_button() {
        BrowserUtils.waitFor(3);
        Assert.assertTrue(registrationPage.UyeOliki.isDisplayed());
    }


    @Given("the user clicks on Cerez button")
    public void theUserClicksOnCerezButton() {
        registrationPage.Cerez.click();


    }

    @Then("the user should be able to display Cinsiyet button")
    public void theUserShouldBeAbleToDisplayCinsiyetButton() {
        BrowserUtils.waitFor(3);

        Assert.assertTrue(registrationPage.Cinsiyet.isDisplayed());
    }

    @Then("the user should be able to display Facebook button")
    public void theUserShouldBeAbleToDisplayFacebookButton() {
        BrowserUtils.waitFor(3);
        Assert.assertTrue(registrationPage.Facebook.isDisplayed());
    }

    @Then("the user should be able to display Google button")
    public void theUserShouldBeAbleToDisplayGoogleButton() {
        BrowserUtils.waitFor(3);
        Assert.assertTrue(registrationPage.Google.isDisplayed());
    }

    @When("The User should not be able to fill anything into eposta input box")
    public void theUserShouldNotBeAbleToFillAnythingIntoEpostaInputBox() throws InterruptedException {
        Thread.sleep(3000);
        registrationPage.Eposta.sendKeys(" ");
    }

    @And("The User should not be able to fill anything şifre  input box")
    public void theUserShouldNotBeAbleToFillAnythingSifreInputBox() throws InterruptedException {
        Thread.sleep(3000);
        registrationPage.Sifre.sendKeys(" ");
    }
    @And("The User Should be able to click on Uye Ol iki button")
    public void theUserShouldBeAbleToClickOnUyeOlIkiButton() {
        registrationPage.UyeOliki.click();

    }

    @Then("The User should be able to display ValidationError Alert Button")
    public void theUserShouldBeAbleToDisplayValidationErrorAlertButton() {

        Assert.assertTrue(registrationPage.ValidationError.isDisplayed());
    }


    @When("The User should be able to enter blank space into eposta input box")
    public void theUserShouldBeAbleToEnterBlankSpaceIntoEpostaInputBox() {
        BrowserUtils.waitFor(3);
        registrationPage.Eposta.sendKeys(Keys.SPACE);
    }

    @And("The User should be able to enter blank space into şifre  input box")
    public void theUserShouldBeAbleToEnterBlankSpaceIntoSifreInputBox() {
        BrowserUtils.waitFor(3);
        registrationPage.Sifre.sendKeys(Keys.SPACE);
    }
}


