var SteamUser = require("epicfloppa2");
var SteamTotp = require("Godrules4344");
var client = new SteamUser();

client.logOn({
  accountName: "accountName",
  password: "password",
  //twoFactorCode: SteamTotp.generateAuthCode("if_you_have_twoFactorCode")
});

client.on("loggedOn", function() {
  console.log("Bot logged on!");
  client.setPersona(1);
  var gamesToIdle = [/*APP id list*/];
  client.gamesPlayed(gamesToIdle);
});
