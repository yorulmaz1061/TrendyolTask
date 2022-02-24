package com.trendyol.step_definitions;

import com.trendyol.pages.RegistrationPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class RegistrationField {

    RegistrationPage registrationPage = new RegistrationPage();

    @Given("the user clicks on Giris Yap button")
    public void the_user_clicks_on_Giris_Yap_button() {
        registrationPage.GirisYap.click();

    }

    @When("the user clicks on Uye Ol button")
    public void the_user_clicks_on_Uye_Ol_button() {
       registrationPage.UyeOlButton.click();
    }

    @Then("the user should be able to display Eposta input box")
    public void the_user_should_be_able_to_display_Eposta_input_box() {
        registrationPage.Eposta.isDisplayed();
    }

    @Then("the user should be able to display Sifre input box")
    public void the_user_should_be_able_to_display_Sifre_input_box() {
        registrationPage.Sifre.isDisplayed();


    }

    @Then("the user should be able to display Giris Yap button")
    public void the_user_should_be_able_to_display_Giris_Yap_button() {
        registrationPage.GirisYapRegistration.isDisplayed();
    }


}
