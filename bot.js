var SteamUser = require("steam-user");
var SteamTotp = require("steam-totp");
var client = new SteamUser();

client.logOn({
  accountName: "epicfloppa2",
  password: "Godrules4344",
  //twoFactorCode: SteamTotp.generateAuthCode("if_you_have_twoFactorCode")
});

client.on("loggedOn", function() {
  console.log("Bot logged on!");
  client.setPersona(1);
  var gamesToIdle = [/*APP id list*/];
  client.gamesPlayed(gamesToIdle);
});
