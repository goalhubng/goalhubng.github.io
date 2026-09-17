const allTeams = [
  // PREMIER LEAGUE - 20
  {name: "Arsenal", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/330px-Arsenal_FC.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Aston Villa", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Aston_Villa_FC_new_crest.svg/330px-Aston_Villa_FC_new_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Bournemouth", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/330px-AFC_Bournemouth_%282013%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Brentford", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/330px-Brentford_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Brighton", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Brighton_and_Hove_Albion_FC_crest.svg/330px-Brighton_and_Hove_Albion_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Burnley", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Burnley_FC_Logo.svg/330px-Burnley_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Chelsea", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/330px-Chelsea_FC.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Crystal Palace", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/330px-Crystal_Palace_FC_logo_%282022%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Everton", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/330px-Everton_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Fulham", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Fulham_FC_%28shield%29.svg/330px-Fulham_FC_%28shield%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Liverpool", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/330px-Liverpool_FC.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Luton Town", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Luton_Town_logo.svg/330px-Luton_Town_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Manchester City", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/330px-Manchester_City_FC_badge.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Manchester United", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/330px-Manchester_United_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Newcastle United", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/330px-Newcastle_United_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Nottingham Forest", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/330px-Nottingham_Forest_F.C._logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Sheffield United", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Sheffield_United_FC_logo.svg/330px-Sheffield_United_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Tottenham Hotspur", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/330px-Tottenham_Hotspur.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "West Ham", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/330px-West_Ham_United_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Wolves", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Wolverhampton_Wanderers_FC_crest.svg/330px-Wolverhampton_Wanderers_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // LA LIGA - 20
  {name: "Alaves", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Deportivo_Alaves_logo_%282020%29.svg/330px-Deportivo_Alaves_logo_%282020%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Athletic Bilbao", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/330px-Club_Athletic_Bilbao_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Atletico Madrid", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Atletico_Madrid_Logo_2024.svg/330px-Atletico_Madrid_Logo_2024.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Barcelona", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/330px-FC_Barcelona_%28crest%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Betis", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Real_Betis_2022_logo.svg/330px-Real_Betis_2022_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Cadiz", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/C%C3%A1diz_CF_logo.svg/330px-C%C3%A1diz_CF_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Celta Vigo", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/330px-RC_Celta_de_Vigo_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Getafe", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/330px-Getafe_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Girona", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Girona_FC_Logo.svg/330px-Girona_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Granada", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Logo_of_Granada_Club_de_F%C3%BAtbol.svg/330px-Logo_of_Granada_Club_de_F%C3%BAtbol.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Las Palmas", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/UD_Las_Palmas_logo.svg/330px-UD_Las_Palmas_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Mallorca", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Rcd_mallorca.svg/330px-Rcd_mallorca.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Osasuna", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/CA_Osasuna_2024_crest.svg/330px-CA_Osasuna_2024_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Rayo Vallecano", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Rayo_Vallecano_logo.svg/330px-Rayo_Vallecano_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Real Madrid", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/330px-Real_Madrid_CF.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Real Sociedad", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/330px-Real_Sociedad_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Sevilla", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/330px-Sevilla_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Valencia", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/330px-Valenciacf.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Villarreal", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Villarreal_CF_logo-en.svg/330px-Villarreal_CF_logo-en.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Almeria", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/UD_Almeria_logo.svg/330px-UD_Almeria_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // SERIE A - 20
  {name: "AC Milan", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/330px-Logo_of_AC_Milan.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Inter Milan", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/330px-FC_Internazionale_Milano_2021.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Juventus", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Juventus_FC_-_logo_black_%28Italy%2C_2020%29.svg/330px-Juventus_FC_-_logo_black_%28Italy%2C_2020%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "AS Roma", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/330px-AS_Roma_logo_%282017%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Napoli", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/SSC_Napoli_2025_%28white_and_azure%29.svg/330px-SSC_Napoli_2025_%28white_and_azure%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Atalanta", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Atalanta_BC_new_logo.svg/330px-Atalanta_BC_new_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Bologna", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bologna_F.C._1909_logo.svg/330px-Bologna_F.C._1909_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Fiorentina", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ACF_Fiorentina_-_logo_%28Italy%2C_2022%29.svg/330px-ACF_Fiorentina_-_logo_%28Italy%2C_2022%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Lazio", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/S.S._Lazio_badge.svg/330px-S.S._Lazio_badge.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Monza", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/AC_Monza_logo_%282021%29.svg/330px-AC_Monza_logo_%282021%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Genoa", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Genoa_CFC_crest.svg/330px-Genoa_CFC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Torino", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Torino_FC_Logo.svg/330px-Torino_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Udinese", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Udinese_Calcio_logo.svg/330px-Udinese_Calcio_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Sassuolo", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/US_Sassuolo_Calcio_logo.svg/330px-US_Sassuolo_Calcio_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Empoli", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Empoli_FC_crest.svg/330px-Empoli_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Lecce", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/US_Lecce_crest.svg/330px-US_Lecce_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Cagliari", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Cagliari_Calcio_1920.svg/330px-Cagliari_Calcio_1920.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Verona", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Hellas_Verona_FC_logo_%282020%29.svg/330px-Hellas_Verona_FC_logo_%282020%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Frosinone", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/0/0b/Frosinone_Calcio_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Salernitana", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/US_Salernitana_1919_logo.svg/330px-US_Salernitana_1919_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // LIGUE 1 - 18
  {name: "Paris Saint-Germain", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/330px-Paris_Saint-Germain_F.C..svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Marseille", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/1/14/Olympique_de_Marseille_logo.svg"},
  {name: "Lyon", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Olympique_Lyonnais_logo.svg/330px-Olympique_Lyonnais_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Monaco", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/LogoASMonacoFC2021.svg/330px-LogoASMonacoFC2021.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Lille", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/4/44/Lille_OSC_logo.svg"},
  {name: "Nice", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/OGC_Nice_logo.svg/330px-OGC_Nice_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Rennes", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Stade_Rennais_FC_logo.svg"},
  {name: "Lens", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/RC_Lens_logo.svg/330px-RC_Lens_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Toulouse", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Toulouse_FC_logo.svg"},
  {name: "Strasbourg", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Racing_Club_de_Strasbourg_logo.svg/330px-Racing_Club_de_Strasbourg_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Reims", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Stade_de_Reims_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Le Havre", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Le_Havre_AC_logo.svg/330px-Le_Havre_AC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Montpellier", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/a/a8/Montpellier_HSC_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Nantes", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_FC_Nantes_%28avec_fond%29_-_2019.svg/330px-Logo_FC_Nantes_%28avec_fond%29_-_2019.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Metz", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/FC_Metz_2021_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Clermont", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/5/52/Clermont_Foot_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Lorient", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/FC_Lorient_logo.svg/330px-FC_Lorient_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Brest", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Stade_Brestois_29_logo.svg/330px-Stade_Brestois_29_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // SAUDI PRO - 18
  {name: "Al Hilal", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Al_Hilal_SFC_Logo.svg/330px-Al_Hilal_SFC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Nassr", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Nassr_FC_Logo.svg/330px-Nassr_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Ittihad", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Al-Ittihad_Club_%28Jeddah%29_logo.svg/330px-Al-Ittihad_Club_%28Jeddah%29_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Ahli", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Al_Ahli_Saudi_FC_logo.svg/330px-Al_Ahli_Saudi_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Shabab", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Al_Shabab_FC_logo.svg"},
  {name: "Al Taawoun", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Al_Taawoun_FC_Logo.svg/330px-Al_Taawoun_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Fateh", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Al_Fateh_SC_Logo.svg/330px-Al_Fateh_SC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Ettifaq", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Al-Ettifaq_FC_logo.svg/330px-Al-Ettifaq_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Feiha", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Al-Fayha_FC.svg/330px-Al-Fayha_FC.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Khaleej", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Al-Khaleej_FC_Logo.svg/330px-Al-Khaleej_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Raed", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Al_Raed_FC.svg/330px-Al_Raed_FC.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Hazm", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Al-Hazem_FC_Logo.svg/330px-Al-Hazem_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Tai", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Al-Tai_FC_Logo.svg/330px-Al-Tai_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Wehda", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Al_Wehda_FC_logo.svg"},
  {name: "Abha", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Abha_Club_Logo.svg/330px-Abha_Club_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Damac", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Damac_FC_Logo.svg/330px-Damac_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Akhdoud", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/Al_Akhdoud_Club_logo.png"},
  {name: "Al Riyadh", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Al-Riyadh_SC.svg/330px-Al-Riyadh_SC.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // BUNDESLIGA - 18
  {name: "Bayern Munich", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg/330px-FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Borussia Dortmund", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/330px-Borussia_Dortmund_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "RB Leipzig", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/RB_Leipzig_2014_logo.svg/330px-RB_Leipzig_2014_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Bayer Leverkusen", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Bayer_04_Leverkusen_logo.svg/330px-Bayer_04_Leverkusen_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Eintracht Frankfurt", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Eintracht_Frankfurt_crest.svg/330px-Eintracht_Frankfurt_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "VfL Wolfsburg", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/VfL_Wolfsburg_logo_2026.svg/330px-VfL_Wolfsburg_logo_2026.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Borussia Monchengladbach", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/330px-Borussia_M%C3%B6nchengladbach_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "SC Freiburg", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/SC_Freiburg_logo.svg/330px-SC_Freiburg_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Union Berlin", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/1._FC_Union_Berlin_Logo.svg/330px-1._FC_Union_Berlin_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Mainz 05", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/1._FSV_Mainz_05_logo.svg/330px-1._FSV_Mainz_05_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "FC Koln", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/1._FC_Koeln_Logo_2014%E2%80%93.svg/330px-1._FC_Koeln_Logo_2014%E2%80%93.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Hoffenheim", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_TSG_Hoffenheim.svg/330px-Logo_TSG_Hoffenheim.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Werder Bremen", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "VfB Stuttgart", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/330px-VfB_Stuttgart_1893_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Augsburg", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/FC_Augsburg_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "VfL Bochum", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/VfL_Bochum_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Heidenheim", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/e/e1/1._FC_Heidenheim_1846_logo.svg"},
  {name: "St. Pauli", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/8/81/FC_St._Pauli_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},

  // EREDIVISIE - 18
  {name: "Ajax", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo_AFC_Ajax_%281928-1991%2C_2025-%29.png/330px-Logo_AFC_Ajax_%281928-1991%2C_2025-%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "PSV Eindhoven", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/0/05/PSV_Eindhoven.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Feyenoord", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Feyenoord_logo_since_2024.svg/330px-Feyenoord_logo_since_2024.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "AZ Alkmaar", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/AZ_Alkmaar.svg/330px-AZ_Alkmaar.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "FC Twente", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/FC_Twente.svg/330px-FC_Twente.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "FC Utrecht", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Logo_FC_Utrecht.svg/330px-Logo_FC_Utrecht.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Sparta Rotterdam", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Sparta_Rotterdam_logo.svg/330px-Sparta_Rotterdam_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "NEC Nijmegen", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/NEC_Nijmegen_logo.svg/330px-NEC_Nijmegen_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Go Ahead Eagles", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Go_Ahead_Eagles_logo.svg/330px-Go_Ahead_Eagles_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Heerenveen", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/SC_Heerenveen_logo.svg/330px-SC_Heerenveen_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "PEC Zwolle", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/PEC_Zwolle_logo.svg/330px-PEC_Zwolle_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Fortuna Sittard", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Fortuna_Sittard_Logo.svg/330px-Fortuna_Sittard_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "RKC Waalwijk", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/RKC_Waalwijk_logo.svg/330px-RKC_Waalwijk_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Willem II", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/Willem_II_(football_club)_logo.svg"},
  {name: "Almere City", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/Almere_City_FC_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "NAC Breda", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_NAC_Breda.svg/330px-Logo_NAC_Breda.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Excelsior", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Excelsior_Rotterdam_logo_2021.svg/330px-Excelsior_Rotterdam_logo_2021.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Volendam", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/FC_Volendam_logo.png/330px-FC_Volendam_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // PRIMEIRA LIGA - 18
  {name: "Benfica", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Porto", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/FC_Porto.svg/330px-FC_Porto.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Sporting CP", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Sporting_Clube_de_Portugal_2026.svg/330px-Sporting_Clube_de_Portugal_2026.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Braga", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/S.C._Braga_logo.svg/330px-S.C._Braga_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Vitoria SC", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Vit%C3%B3ria_Guimar%C3%A3es.svg/330px-Vit%C3%B3ria_Guimar%C3%A3es.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Boavista", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Boavista_F.C._logo.svg/330px-Boavista_F.C._logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Famalicao", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/F.C._Famalic%C3%A3o_logo.svg/330px-F.C._Famalic%C3%A3o_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Estoril", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/GD_Estoril_Praia_logo.svg/330px-GD_Estoril_Praia_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Casa Pia", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Casa_Pia_A.C._logo.svg/330px-Casa_Pia_A.C._logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Rio Ave", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Rio_Ave_FC_logo.svg/330px-Rio_Ave_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Arouca", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/F.C._Arouca_logo.svg/330px-F.C._Arouca_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Moreirense", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Moreirense_Futebol_Clube_logo.svg/330px-Moreirense_Futebol_Clube_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Gil Vicente", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/Gil_Vicente_F.C.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Farense", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/S.C._Farense_logo.svg/330px-S.C._Farense_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Portimonense", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Portimonense_Sporting_Clube_logo.svg/330px-Portimonense_Sporting_Clube_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Estrela Amadora", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/S%C3%ADmbolo_Estrela_da_Amadora.svg/330px-S%C3%ADmbolo_Estrela_da_Amadora.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Nacional", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/C.D._Nacional_logo.svg/330px-C.D._Nacional_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "AVS", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/AVS_Futebol_SAD_logo.svg/330px-AVS_Futebol_SAD_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // SUPER LIG - 20
  {name: "Galatasaray", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Galatasaray_S.K._Logo_2026_5-stars.svg/330px-Galatasaray_S.K._Logo_2026_5-stars.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Fenerbahce", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/8/86/Fenerbahce_SK.svg"},
  {name: "Besiktas", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/Besiktas_JK.svg"},
  {name: "Trabzonspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Trabzonspor_Amblem.svg/330px-Trabzonspor_Amblem.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Basaksehir", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_logo.svg/330px-%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Sivasspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Sivasspor_logo.svg/330px-Sivasspor_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Alanyaspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Alanyaspor_logo.svg/330px-Alanyaspor_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Antalyaspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Antalyaspor_logo.svg/330px-Antalyaspor_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Kasimpasa", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Kasimpasa_logo.svg/330px-Kasimpasa_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Kayserispor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kayserispor_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Konyaspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Konyaspor_logo.svg/330px-Konyaspor_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Gaziantep FK", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Gazi%C5%9Fehir_Gaziantep_logo.svg/330px-Gazi%C5%9Fehir_Gaziantep_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Rizespor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Logo_Rizespor.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Samsunspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/2/26/Samsunspor_logo.svg"},
  {name: "Adana Demirspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/d/d1/Adana_Demirspor_logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Fatih Karagumruk", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/e/ea/Fatih_Karag%C3%BCmr%C3%BCk_S.K..png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Hatayspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/f/fe/Hatayspor_crest.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Pendikspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/Pendikspor.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Ankaragucu", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Ankaragucu_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Genclerbirligi", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Gen%C3%A7lerbirli%C4%9Fi_S.K._crest.svg/330px-Gen%C3%A7lerbirli%C4%9Fi_S.K._crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // SCOTTISH PREMIERSHIP - 12
  {name: "Celtic", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/3/35/Celtic_FC.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Rangers", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/4/43/Rangers_FC.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Aberdeen", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/8/82/Aberdeen_FC_crest.svg"},
  {name: "Hearts", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/6/61/Heart_of_Midlothian_FC_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Hibernian", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Hibernian_FC_Official_2026.svg/330px-Hibernian_FC_Official_2026.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Motherwell", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Motherwell_FC_crest.svg/330px-Motherwell_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Dundee United", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Dundee_United_FC_crest.svg/330px-Dundee_United_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "St Mirren", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/St_Mirren_FC_crest.svg/330px-St_Mirren_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Kilmarnock", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Kilmarnock_FC_crest.svg/330px-Kilmarnock_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Ross County", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Ross_County_FC_crest.svg/330px-Ross_County_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Dundee", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Dundee_FC_2025_Crest.svg/330px-Dundee_FC_2025_Crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "St Johnstone", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/St_Johnstone_FC_crest.svg/330px-St_Johnstone_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // RUSSIAN PREMIER LEAGUE - 16
  {name: "Zenit", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/FC_Zenit_Saint_Petersburg_crest.svg/330px-FC_Zenit_Saint_Petersburg_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Spartak Moscow", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/FC_Spartak_Moscow_crest.svg/330px-FC_Spartak_Moscow_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "CSKA Moscow", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/PFK_CSKA_Logo.svg/330px-PFK_CSKA_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Dynamo Moscow", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Dynamo_Moscow_logo.svg/330px-Dynamo_Moscow_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Lokomotiv Moscow", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/FC_Lokomotiv_Moscow_logo.svg/330px-FC_Lokomotiv_Moscow_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Krasnodar", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/FC_Krasnodar_logo.svg/330px-FC_Krasnodar_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Rubin Kazan", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/3/32/FC_Rubin_Kazan_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Rostov", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/FC_Rostov_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Akhmat Grozny", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/3/36/Akhmat_Grozny_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Krylia Sovetov", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/FC_Krylia_Sovetov_Samara_logo.svg"},
  {name: "Sochi", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/FC_Sochi_logo.svg"},
  {name: "Ural", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/FC_Ural_Yekaterinburg_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Nizhny Novgorod", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/8/85/FC_Nizhny_Novgorod_logo.svg"},
  {name: "Fakel Voronezh", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/FC_Fakel_Voronezh_logo.svg"},
  {name: "Baltika Kaliningrad", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/FC_Baltika_Kaliningrad_logo.svg"},
  {name: "Khimki", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/FC_Khimki_logo.svg"},

  // BRASILEIRAO - 20
  {name: "Flamengo", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flamengo-RJ_%28BRA%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Palmeiras", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Sao Paulo", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/S%C3%A3o_Paulo_Futebol_Clube_logo_%282022%29.svg/330px-S%C3%A3o_Paulo_Futebol_Clube_logo_%282022%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Corinthians", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Sport_Club_Corinthians_Paulista_crest.svg/330px-Sport_Club_Corinthians_Paulista_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Gremio", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Gremio_logo.svg/330px-Gremio_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Internacional", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sport_Club_Internacional_logo.svg/330px-Sport_Club_Internacional_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Atletico Mineiro", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Logo_of_Clube_Atl%C3%A9tico_Mineiro.svg/330px-Logo_of_Clube_Atl%C3%A9tico_Mineiro.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Fluminense", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fluminense_Football_Club.svg/330px-Fluminense_Football_Club.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Botafogo", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/330px-Botafogo_de_Futebol_e_Regatas_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Vasco da Gama", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Club_de_Regatas_Vasco_da_Gama_logo_%282021%29.svg/330px-Club_de_Regatas_Vasco_da_Gama_logo_%282021%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Cruzeiro", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/330px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Bahia", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Logo_of_Esporte_Clube_Bahia_%282004%29.svg/330px-Logo_of_Esporte_Clube_Bahia_%282004%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Fortaleza", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Fortaleza_Esporte_Clube_logo.png/330px-Fortaleza_Esporte_Clube_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Athletico Paranaense", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Athletico_Paranaense_%28Logo_2019%29.svg/330px-Athletico_Paranaense_%28Logo_2019%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Bragantino", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Red_Bull_Bragantino_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Criciuma", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/en/9/94/Criciúma_EC_logo.svg"},
  {name: "Cuiaba", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/en/9/9d/Cuiabá_EC_logo.svg"},
  {name: "Vitoria", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Esporte_Clube_Vitória_logo.svg"},
  {name: "Juventude", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Juventude_crest.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Atletico Goianiense", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Atl%C3%A9tico_Clube_Goianiense_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},

  // SUPER LEAGUE GREECE - 14
  {name: "Olympiacos", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Olympiacos_FC_logo.svg"},
  {name: "Panathinaikos", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/1/1e/PAO_alt_logo.svg"},
  {name: "AEK Athens", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/AEK_Athens_FC_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "PAOK", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/e/e6/PAOK_FC_EMBLEM.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Aris", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Aris_Thessaloniki_F.C._logo.svg/330px-Aris_Thessaloniki_F.C._logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Asteras Tripolis", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Asteras_Tripolis_FC_logo.svg/330px-Asteras_Tripolis_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Atromitos", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/e/e9/Atromitos.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "OFI Crete", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/OFI_Crete_F.C._logo.svg/330px-OFI_Crete_F.C._logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Panetolikos", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Panetolikos_new_emblem.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Volos", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/7/70/Volos_F.C._logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Lamia", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/PAS_Lamia_1964_logo.svg/330px-PAS_Lamia_1964_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Kifisia", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/AO_Kifisia_F.C._logo.png"},
  {name: "Panserraikos", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/b/b0/Panseraikos_new_emblem.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Athens Kallithea", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/c/c3/Athens_Kallithea_FC_crest_%282022%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},

  // BELGIAN PRO LEAGUE - 16
  {name: "Club Brugge", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Club_brugge.png/330px-Club_brugge.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Anderlecht", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/RSC_Anderlecht_logo.svg"},
  {name: "Genk", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/0/03/KRC_Genk_logo.svg"},
  {name: "Union SG", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/1/11/Royale_Union_Saint-Gilloise_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Antwerp", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/6/61/Royal_Antwerp_FC_logo.svg"},
  {name: "Gent", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/KAA_Gent_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Standard Liege", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/8/85/Standard_de_Liège_logo.svg"},
  {name: "Charleroi", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/1/16/R._Charleroi_S.C._logo.svg"},
  {name: "Cercle Brugge", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/Cercle_Brugge_K.S.V._logo.svg"},
  {name: "STVV", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/K._Sint-Truidense_V.V._logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Westerlo", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/KVC_Westerlo_logo.svg"},
  {name: "OH Leuven", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/OH_LEUVEN.png/330px-OH_LEUVEN.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Kortrijk", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/KV_Kortrijk_logo_2016.svg/330px-KV_Kortrijk_logo_2016.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "RWDM", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/9/9f/RWD_Molenbeek_logo.svg"},
  {name: "Dender", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/9/98/FCVDenderEH.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Beerschot", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Koninklijke_Beerschot_Voetbalclub_Antwerpen_logo.svg/330px-Koninklijke_Beerschot_Voetbalclub_Antwerpen_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // MLS (USA/Canada) - 30, badges verified individually via TheSportsDB
  // since its bulk team-list endpoint is capped at 10 on the free tier.
  {name: "Atlanta United", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/ej091x1602103070.png"},
  {name: "Austin FC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/a3dlg61595434277.png"},
  {name: "CF Montreal", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/livdl31679344925.png"},
  {name: "Charlotte FC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/b6p4uz1595434047.png"},
  {name: "Chicago Fire", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/8xuc781639493166.png"},
  {name: "Colorado Rapids", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/uppupv1473536412.png"},
  {name: "Columbus Crew", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/dzs8cp1629059854.png"},
  {name: "DC United", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/uwvsyt1467462609.png"},
  {name: "FC Cincinnati", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/vvhsqc1707631046.png"},
  {name: "FC Dallas", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/vxy8xy1602103187.png"},
  {name: "Houston Dynamo", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/yvz9dq1707631352.png"},
  {name: "Sporting Kansas City", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/tqupxw1473536504.png"},
  {name: "LA Galaxy", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/ysyysr1420227188.png"},
  {name: "Los Angeles FC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/7nbj2a1602103638.png"},
  {name: "Inter Miami", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/m4it3e1602103647.png"},
  {name: "Minnesota United", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/vl67t41492453433.png"},
  {name: "Nashville SC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/znrwt71602103062.png"},
  {name: "New England Revolution", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/1ula2l1639493143.png"},
  {name: "New York City FC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/m9vis71735140655.png"},
  {name: "New York Red Bulls", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/suytvy1473536462.png"},
  {name: "Orlando City", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/qyppxw1423832326.png"},
  {name: "Philadelphia Union", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/gyznyo1602103682.png"},
  {name: "Portland Timbers", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/skm30j1557953559.png"},
  {name: "Real Salt Lake", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/kkjlfa1556488022.png"},
  {name: "San Diego FC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/7ka2xd1734621068.png"},
  {name: "San Jose Earthquakes", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/xyrqqt1420781048.png"},
  {name: "Seattle Sounders", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/2dy5cx1706711036.png"},
  {name: "St. Louis City SC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/22wanp1674118724.png"},
  {name: "Toronto FC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/rsxyrr1473536512.png"},
  {name: "Vancouver Whitecaps", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/tpwxpy1473536521.png"},

  // LIGA PROFESIONAL ARGENTINA - 29. San Lorenzo's only entry in our free
  // data source is their basketball team, not football — rather than show
  // a wrong badge, it's left blank so the site's existing initials-avatar
  // fallback handles it honestly.
  {name: "Aldosivi", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/nqrjqb1517767667.png"},
  {name: "Argentinos Juniors", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/uqfjuo1769234850.png"},
  {name: "Atletico Tucuman", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/m5i2q21775755577.png"},
  {name: "Banfield", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/c2ea011775756104.png"},
  {name: "Barracas Central", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/rbkjba1707458543.png"},
  {name: "Belgrano", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/0twgzi1517768087.png"},
  {name: "Boca Juniors", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/bm7krb1775741582.png"},
  {name: "Central Cordoba", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/d62xkc1576101576.png"},
  {name: "Defensa y Justicia", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/3guvlh1775778978.png"},
  {name: "Deportivo Riestra", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/332h0l1578824392.png"},
  {name: "Rosario Central", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/y6q1ds1769660256.png"},
  {name: "Racing Club", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/vi4mu41695734959.png"},
  {name: "River Plate", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/03dmi31645539717.png"},
  {name: "Independiente", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/eki4nd1580842605.png"},
  {name: "San Lorenzo", league: "Liga Profesional Argentina", logo: ""},
  {name: "Estudiantes de La Plata", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/pf08dq1760634366.png"},
  {name: "Gimnasia La Plata", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/dtqto61775838814.png"},
  {name: "Godoy Cruz", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/d3c0ds1517768584.png"},
  {name: "Huracan", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/kppi2b1775776550.png"},
  {name: "Instituto", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/jup59w1578825794.png"},
  {name: "Lanus", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/ddty0w1769146364.png"},
  {name: "Newells Old Boys", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/23aftf1580842633.png"},
  {name: "Platense", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/lbs14n1769317149.png"},
  {name: "Sarmiento", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/xxofu71677634191.png"},
  {name: "Talleres", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/7hum2t1769310938.png"},
  {name: "Tigre", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/krryg71765858882.png"},
  {name: "Union Santa Fe", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/btnx6q1734587495.png"},
  {name: "Velez Sarsfield", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/jo98m71517769587.png"},
  {name: "Independiente Rivadavia", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/qgzi2b1769406125.png"},

  // AUSTRIAN BUNDESLIGA - 12, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "Austria Wien", league: "Austrian Bundesliga", logo: ""},
  {name: "FC Blau Weiß Linz", league: "Austrian Bundesliga", logo: ""},
  {name: "Grazer AK", league: "Austrian Bundesliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/43rocv1750352978.png"},
  {name: "LASK", league: "Austrian Bundesliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/oox26l1683556395.png"},
  {name: "RB Salzburg", league: "Austrian Bundesliga", logo: ""},
  {name: "Rapid Wien", league: "Austrian Bundesliga", logo: ""},
  {name: "SCR Altach", league: "Austrian Bundesliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/2hit6x1750352012.png"},
  {name: "SV Ried", league: "Austrian Bundesliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/c1bxyq1583516636.png"},
  {name: "Sturm Graz", league: "Austrian Bundesliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/ppg0j71578585847.png"},
  {name: "TSV Hartberg", league: "Austrian Bundesliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/72c0xg1578833261.png"},
  {name: "WSG Tirol", league: "Austrian Bundesliga", logo: ""},
  {name: "Wolfsberger AC", league: "Austrian Bundesliga", logo: ""},

  // AUSTRIAN ERSTE LIGA - 16, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "Austria Lustenau", league: "Austrian Erste Liga", logo: ""},
  {name: "Austria Salzburg", league: "Austrian Erste Liga", logo: "https://r2.thesportsdb.com/images/media/team/badge/rjahu01782841316.png"},
  {name: "Austria Wien II", league: "Austrian Erste Liga", logo: ""},
  {name: "FC Admira Wacker", league: "Austrian Erste Liga", logo: "https://r2.thesportsdb.com/images/media/team/badge/d5m6cv1722794864.png"},
  {name: "FC Hertha Wels", league: "Austrian Erste Liga", logo: "https://r2.thesportsdb.com/images/media/team/badge/o4zhsq1720339285.png"},
  {name: "FC Liefering", league: "Austrian Erste Liga", logo: "https://r2.thesportsdb.com/images/media/team/badge/2u0bb91583516567.png"},
  {name: "First Vienna", league: "Austrian Erste Liga", logo: "https://r2.thesportsdb.com/images/media/team/badge/9ca40j1603308320.png"},
  {name: "Floridsdorfer AC", league: "Austrian Erste Liga", logo: "https://r2.thesportsdb.com/images/media/team/badge/8997wz1722795176.png"},
  {name: "Kapfenberger SV 1919", league: "Austrian Erste Liga", logo: ""},
  {name: "Rapid Wien II", league: "Austrian Erste Liga", logo: "https://r2.thesportsdb.com/images/media/team/badge/ebwdmz1782841141.png"},
  {name: "SK Austria Klagenfurt", league: "Austrian Erste Liga", logo: ""},
  {name: "SKN St. Pölten", league: "Austrian Erste Liga", logo: ""},
  {name: "SKU Amstetten", league: "Austrian Erste Liga", logo: ""},
  {name: "SV Stripfing/Weiden", league: "Austrian Erste Liga", logo: ""},
  {name: "Schwarz-Weiß Bregenz", league: "Austrian Erste Liga", logo: "https://r2.thesportsdb.com/images/media/team/badge/6b0b1d1657897157.png"},
  {name: "Sturm Graz II", league: "Austrian Erste Liga", logo: ""},

  // EFL CHAMPIONSHIP - 24, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "Birmingham City", league: "EFL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/wufs551672950865.png"},
  {name: "Blackburn Rovers", league: "EFL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/rvryut1448810814.png"},
  {name: "Bristol City", league: "EFL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/0ejxwz1601721013.png"},
  {name: "Charlton Athletic", league: "EFL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/o08wvi1635872307.png"},
  {name: "Coventry City", league: "EFL Championship", logo: ""},
  {name: "Derby County", league: "EFL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/jioo4z1557155744.png"},
  {name: "Hull City", league: "EFL Championship", logo: ""},
  {name: "Ipswich Town", league: "EFL Championship", logo: ""},
  {name: "Leicester City", league: "EFL Championship", logo: ""},
  {name: "Middlesbrough", league: "EFL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/advjg71780068902.png"},
  {name: "Millwall", league: "EFL Championship", logo: ""},
  {name: "Norwich City", league: "EFL Championship", logo: ""},
  {name: "Oxford United", league: "EFL Championship", logo: ""},
  {name: "Portsmouth", league: "EFL Championship", logo: ""},
  {name: "Preston North End", league: "EFL Championship", logo: ""},
  {name: "Queens Park Rangers", league: "EFL Championship", logo: ""},
  {name: "Sheffield United", league: "EFL Championship", logo: ""},
  {name: "Sheffield Wednesday", league: "EFL Championship", logo: ""},
  {name: "Southampton", league: "EFL Championship", logo: ""},
  {name: "Stoke City", league: "EFL Championship", logo: ""},
  {name: "Swansea City", league: "EFL Championship", logo: ""},
  {name: "Watford", league: "EFL Championship", logo: ""},
  {name: "West Bromwich Albion", league: "EFL Championship", logo: ""},
  {name: "Wrexham", league: "EFL Championship", logo: ""},

  // LA LIGA 2 - 22, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "AD Ceuta", league: "La Liga 2", logo: ""},
  {name: "Albacete", league: "La Liga 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/17oqja1616436316.png"},
  {name: "Burgos CF", league: "La Liga 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/79h3ul1708150894.png"},
  {name: "CD Castellón", league: "La Liga 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/ywibjw1733456820.png"},
  {name: "CD Leganés", league: "La Liga 2", logo: ""},
  {name: "CD Mirandés", league: "La Liga 2", logo: ""},
  {name: "Cultural Leonesa", league: "La Liga 2", logo: ""},
  {name: "Cádiz CF", league: "La Liga 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/e2phzp1639408503.png"},
  {name: "Córdoba CF", league: "La Liga 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/ttyyvy1473503827.png"},
  {name: "Deportivo La Coruña", league: "La Liga 2", logo: ""},
  {name: "FC Andorra", league: "La Liga 2", logo: ""},
  {name: "Granada CF", league: "La Liga 2", logo: ""},
  {name: "Málaga CF", league: "La Liga 2", logo: ""},
  {name: "Racing Santander", league: "La Liga 2", logo: ""},
  {name: "Real Sociedad B", league: "La Liga 2", logo: ""},
  {name: "Real Valladolid", league: "La Liga 2", logo: ""},
  {name: "Real Zaragoza", league: "La Liga 2", logo: ""},
  {name: "SD Eibar", league: "La Liga 2", logo: ""},
  {name: "SD Huesca", league: "La Liga 2", logo: ""},
  {name: "Sporting Gijón", league: "La Liga 2", logo: ""},
  {name: "UD Almería", league: "La Liga 2", logo: ""},
  {name: "UD Las Palmas", league: "La Liga 2", logo: ""},

  // LIGUE 2 - 18, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "AS Nancy Lorraine", league: "Ligue 2", logo: ""},
  {name: "AS Saint-Étienne", league: "Ligue 2", logo: ""},
  {name: "Amiens SC", league: "Ligue 2", logo: ""},
  {name: "Clermont Foot 63", league: "Ligue 2", logo: ""},
  {name: "EA Guingamp", league: "Ligue 2", logo: ""},
  {name: "ESTAC Troyes", league: "Ligue 2", logo: ""},
  {name: "FC Annecy", league: "Ligue 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/h6981f1655120883.png"},
  {name: "Grenoble Foot 38", league: "Ligue 2", logo: ""},
  {name: "Le Mans", league: "Ligue 2", logo: ""},
  {name: "Montpellier HSC", league: "Ligue 2", logo: ""},
  {name: "Pau", league: "Ligue 2", logo: ""},
  {name: "Red Star", league: "Ligue 2", logo: ""},
  {name: "Rodez AF", league: "Ligue 2", logo: ""},
  {name: "SC Bastia", league: "Ligue 2", logo: ""},
  {name: "Stade Lavallois", league: "Ligue 2", logo: ""},
  {name: "Stade de Reims", league: "Ligue 2", logo: ""},
  {name: "US Boulogne", league: "Ligue 2", logo: ""},
  {name: "USL Dunkerque", league: "Ligue 2", logo: ""},

  // SERIE B - 20, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "AC Monza", league: "Serie B", logo: ""},
  {name: "AC Reggiana 1919", league: "Serie B", logo: ""},
  {name: "Calcio Padova", league: "Serie B", logo: ""},
  {name: "Carrarese Calcio", league: "Serie B", logo: ""},
  {name: "Cesena", league: "Serie B", logo: "https://r2.thesportsdb.com/images/media/team/badge/9l00zr1677256723.png"},
  {name: "Delfino Pescara", league: "Serie B", logo: ""},
  {name: "Empoli", league: "Serie B", logo: "https://r2.thesportsdb.com/images/media/team/badge/c1ie6b1622561483.png"},
  {name: "FC Südtirol", league: "Serie B", logo: ""},
  {name: "Frosinone Calcio", league: "Serie B", logo: ""},
  {name: "Juve Stabia", league: "Serie B", logo: ""},
  {name: "Mantova 1911 SSD", league: "Serie B", logo: ""},
  {name: "Modena", league: "Serie B", logo: ""},
  {name: "Palermo", league: "Serie B", logo: ""},
  {name: "SSC Bari", league: "Serie B", logo: ""},
  {name: "Sampdoria", league: "Serie B", logo: ""},
  {name: "Spezia Calcio", league: "Serie B", logo: ""},
  {name: "US Avellino", league: "Serie B", logo: ""},
  {name: "US Catanzaro", league: "Serie B", logo: ""},
  {name: "Venezia", league: "Serie B", logo: ""},
  {name: "Virtus Entella", league: "Serie B", logo: ""},

  // 2. BUNDESLIGA - 18, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "1. FC Kaiserslautern", league: "2. Bundesliga", logo: ""},
  {name: "1. FC Magdeburg", league: "2. Bundesliga", logo: ""},
  {name: "1. FC Nürnberg", league: "2. Bundesliga", logo: ""},
  {name: "Arminia Bielefeld", league: "2. Bundesliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/xrrwpx1447591964.png"},
  {name: "Dynamo Dresden", league: "2. Bundesliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/0vfmdu1783231141.png"},
  {name: "Eintracht Braunschweig", league: "2. Bundesliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/lrrq0z1599820707.png"},
  {name: "FC Schalke 04", league: "2. Bundesliga", logo: ""},
  {name: "Fortuna Düsseldorf", league: "2. Bundesliga", logo: ""},
  {name: "Hannover 96", league: "2. Bundesliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/tqpqqv1473454148.png"},
  {name: "Hertha BSC", league: "2. Bundesliga", logo: ""},
  {name: "Holstein Kiel", league: "2. Bundesliga", logo: ""},
  {name: "Karlsruher SC", league: "2. Bundesliga", logo: ""},
  {name: "Preußen Münster", league: "2. Bundesliga", logo: ""},
  {name: "SC Paderborn 07", league: "2. Bundesliga", logo: ""},
  {name: "SV 07 Elversberg", league: "2. Bundesliga", logo: ""},
  {name: "SV Darmstadt 98", league: "2. Bundesliga", logo: ""},
  {name: "SpVgg Greuther Fürth", league: "2. Bundesliga", logo: ""},
  {name: "VfL Bochum", league: "2. Bundesliga", logo: ""},
  // Nigeria NPFL (20 teams)
  {name: "Abia Warriors", league: "Nigeria NPFL", logo: "https://r2.thesportsdb.com/images/media/team/badge/getpvo1590183315.png"},
  {name: "Barau", league: "Nigeria NPFL", logo: "https://r2.thesportsdb.com/images/media/team/badge/5mk51u1755988518.png"},
  {name: "Bayelsa United", league: "Nigeria NPFL", logo: ""},
  {name: "Bendel Insurance", league: "Nigeria NPFL", logo: "https://r2.thesportsdb.com/images/media/team/badge/p5th3c1714520172.png"},
  {name: "El-Kanemi Warriors", league: "Nigeria NPFL", logo: ""},
  {name: "Enugu Rangers", league: "Nigeria NPFL", logo: ""},
  {name: "Enyimba", league: "Nigeria NPFL", logo: "https://r2.thesportsdb.com/images/media/team/badge/uiz3l01786855143.png"},
  {name: "Ikorodu City", league: "Nigeria NPFL", logo: "https://r2.thesportsdb.com/images/media/team/badge/p05jag1721754543.png"},
  {name: "Kano Pillars", league: "Nigeria NPFL", logo: "https://r2.thesportsdb.com/images/media/team/badge/bgleh01589375519.png"},
  {name: "Katsina United", league: "Nigeria NPFL", logo: "https://r2.thesportsdb.com/images/media/team/badge/oyajem1590185640.png"},
  {name: "Kun Khalifat", league: "Nigeria NPFL", logo: "https://r2.thesportsdb.com/images/media/team/badge/0hhm211755988471.png"},
  {name: "Kwara United", league: "Nigeria NPFL", logo: ""},
  {name: "Nasarawa United", league: "Nigeria NPFL", logo: ""},
  {name: "Niger Tornadoes", league: "Nigeria NPFL", logo: ""},
  {name: "Plateau United", league: "Nigeria NPFL", logo: ""},
  {name: "Remo Stars", league: "Nigeria NPFL", logo: ""},
  {name: "Rivers United", league: "Nigeria NPFL", logo: ""},
  {name: "Shooting Stars", league: "Nigeria NPFL", logo: ""},
  {name: "Warri Wolves", league: "Nigeria NPFL", logo: ""},
  {name: "Wikki Tourists", league: "Nigeria NPFL", logo: ""},
  // Brazil Serie B (19 teams — Athletico Paranaense already listed under Brasileirao, excluded here)
  {name: "Amazonas", league: "Brazil Serie B", logo: ""},
  {name: "America Mineiro", league: "Brazil Serie B", logo: ""},
  {name: "Athletic", league: "Brazil Serie B", logo: ""},
  {name: "Avai", league: "Brazil Serie B", logo: ""},
  {name: "Botafogo-SP", league: "Brazil Serie B", logo: "https://r2.thesportsdb.com/images/media/team/badge/kg3xsd1701366652.png"},
  {name: "Chapecoense", league: "Brazil Serie B", logo: ""},
  {name: "Coritiba", league: "Brazil Serie B", logo: ""},
  {name: "CRB", league: "Brazil Serie B", logo: "https://r2.thesportsdb.com/images/media/team/badge/vpypuq1472069179.png"},
  {name: "Ferroviaria", league: "Brazil Serie B", logo: ""},
  {name: "Goias", league: "Brazil Serie B", logo: ""},
  {name: "Novorizontino", league: "Brazil Serie B", logo: ""},
  {name: "Operario Ferroviario", league: "Brazil Serie B", logo: ""},
  {name: "Paysandu", league: "Brazil Serie B", logo: ""},
  {name: "Remo", league: "Brazil Serie B", logo: ""},
  {name: "Vila Nova", league: "Brazil Serie B", logo: ""},
  {name: "Volta Redonda", league: "Brazil Serie B", logo: ""},
  // Argentina Primera Nacional (35 teams — Godoy Cruz already listed under Liga Profesional Argentina, excluded here)
  {name: "Acassuso", league: "Argentina Primera Nacional", logo: "https://r2.thesportsdb.com/images/media/team/badge/81kew41677993637.png"},
  {name: "Agropecuario Argentino", league: "Argentina Primera Nacional", logo: ""},
  {name: "All Boys", league: "Argentina Primera Nacional", logo: "https://r2.thesportsdb.com/images/media/team/badge/zo4vm01578824142.png"},
  {name: "Almagro", league: "Argentina Primera Nacional", logo: "https://r2.thesportsdb.com/images/media/team/badge/zv7sju1578825975.png"},
  {name: "Almirante Brown", league: "Argentina Primera Nacional", logo: "https://r2.thesportsdb.com/images/media/team/badge/81i8mf1615822788.png"},
  {name: "Atlanta", league: "Argentina Primera Nacional", logo: "https://r2.thesportsdb.com/images/media/team/badge/ey0i4o1775792685.png"},
  {name: "Atletico de Rafaela", league: "Argentina Primera Nacional", logo: ""},
  {name: "Central Norte", league: "Argentina Primera Nacional", logo: "https://r2.thesportsdb.com/images/media/team/badge/b0uo2b1678853683.png"},
  {name: "Chacarita Juniors", league: "Argentina Primera Nacional", logo: "https://r2.thesportsdb.com/images/media/team/badge/pjam301511624231.png"},
  {name: "Chaco For Ever", league: "Argentina Primera Nacional", logo: "https://r2.thesportsdb.com/images/media/team/badge/9wxhp31678848859.png"},
  {name: "Ciudad de Bolivar", league: "Argentina Primera Nacional", logo: ""},
  {name: "Colegiales", league: "Argentina Primera Nacional", logo: ""},
  {name: "Colon", league: "Argentina Primera Nacional", logo: ""},
  {name: "Defensores de Belgrano", league: "Argentina Primera Nacional", logo: ""},
  {name: "Deportivo Madryn", league: "Argentina Primera Nacional", logo: ""},
  {name: "Deportivo Maipu", league: "Argentina Primera Nacional", logo: ""},
  {name: "Deportivo Moron", league: "Argentina Primera Nacional", logo: ""},
  {name: "Estudiantes (BA)", league: "Argentina Primera Nacional", logo: ""},
  {name: "Ferrocarril Midland", league: "Argentina Primera Nacional", logo: ""},
  {name: "Ferro Carril Oeste", league: "Argentina Primera Nacional", logo: ""},
  {name: "Gimnasia y Esgrima (J)", league: "Argentina Primera Nacional", logo: ""},
  {name: "Gimnasia y Tiro", league: "Argentina Primera Nacional", logo: ""},
  {name: "Guemes", league: "Argentina Primera Nacional", logo: ""},
  {name: "Los Andes", league: "Argentina Primera Nacional", logo: ""},
  {name: "Mitre (SdE)", league: "Argentina Primera Nacional", logo: ""},
  {name: "Nueva Chicago", league: "Argentina Primera Nacional", logo: ""},
  {name: "Patronato", league: "Argentina Primera Nacional", logo: ""},
  {name: "Quilmes", league: "Argentina Primera Nacional", logo: ""},
  {name: "Racing (C)", league: "Argentina Primera Nacional", logo: ""},
  {name: "San Martin (SJ)", league: "Argentina Primera Nacional", logo: ""},
  {name: "San Martin (T)", league: "Argentina Primera Nacional", logo: ""},
  {name: "San Miguel", league: "Argentina Primera Nacional", logo: ""},
  {name: "San Telmo", league: "Argentina Primera Nacional", logo: ""},
  {name: "Temperley", league: "Argentina Primera Nacional", logo: ""},
  {name: "Tristan Suarez", league: "Argentina Primera Nacional", logo: ""},
  // Turkey 1.Lig (16 teams — Adana Demirspor, Hatayspor, Pendikspor, Sivasspor already listed under Super Lig, excluded here)
  {name: "Amedspor", league: "Turkey 1.Lig", logo: ""},
  {name: "Bandirmaspor", league: "Turkey 1.Lig", logo: ""},
  {name: "Bodrum", league: "Turkey 1.Lig", logo: "https://r2.thesportsdb.com/images/media/team/badge/2njed61657195683.png"},
  {name: "Boluspor", league: "Turkey 1.Lig", logo: "https://r2.thesportsdb.com/images/media/team/badge/5uv4ni1657195692.png"},
  {name: "Corum", league: "Turkey 1.Lig", logo: ""},
  {name: "Esenler Erokspor", league: "Turkey 1.Lig", logo: "https://r2.thesportsdb.com/images/media/team/badge/107ke31657455566.png"},
  {name: "Erzurumspor", league: "Turkey 1.Lig", logo: ""},
  {name: "Istanbulspor", league: "Turkey 1.Lig", logo: ""},
  {name: "Igdir", league: "Turkey 1.Lig", logo: ""},
  {name: "Kecirengucu", league: "Turkey 1.Lig", logo: ""},
  {name: "Manisa", league: "Turkey 1.Lig", logo: ""},
  {name: "Sakaryaspor", league: "Turkey 1.Lig", logo: ""},
  {name: "Sariyer", league: "Turkey 1.Lig", logo: ""},
  {name: "Serikspor", league: "Turkey 1.Lig", logo: ""},
  {name: "Umraniyespor", league: "Turkey 1.Lig", logo: ""},
  {name: "Vanspor", league: "Turkey 1.Lig", logo: ""},
  // Poland Ekstraklasa (18 teams)
  {name: "Arka Gdynia", league: "Poland Ekstraklasa", logo: ""},
  {name: "Bruk-Bet Termalica Nieciecza", league: "Poland Ekstraklasa", logo: ""},
  {name: "Cracovia", league: "Poland Ekstraklasa", logo: "https://r2.thesportsdb.com/images/media/team/badge/bgqbo51714200086.png"},
  {name: "GKS Katowice", league: "Poland Ekstraklasa", logo: "https://r2.thesportsdb.com/images/media/team/badge/zsva1p1626103599.png"},
  {name: "Gornik Zabrze", league: "Poland Ekstraklasa", logo: ""},
  {name: "Jagiellonia Bialystok", league: "Poland Ekstraklasa", logo: ""},
  {name: "Korona Kielce", league: "Poland Ekstraklasa", logo: "https://r2.thesportsdb.com/images/media/team/badge/ytpvtv1448218305.png"},
  {name: "Lech Poznan", league: "Poland Ekstraklasa", logo: ""},
  {name: "Lechia Gdansk", league: "Poland Ekstraklasa", logo: ""},
  {name: "Legia Warsaw", league: "Poland Ekstraklasa", logo: "https://r2.thesportsdb.com/images/media/team/badge/c969ez1632775656.png"},
  {name: "Motor Lublin", league: "Poland Ekstraklasa", logo: "https://r2.thesportsdb.com/images/media/team/badge/7qevx11720351099.png"},
  {name: "Piast Gliwice", league: "Poland Ekstraklasa", logo: "https://r2.thesportsdb.com/images/media/team/badge/qywuux1448219182.png"},
  {name: "Pogon Szczecin", league: "Poland Ekstraklasa", logo: ""},
  {name: "Radomiak Radom", league: "Poland Ekstraklasa", logo: ""},
  {name: "Rakow Czestochowa", league: "Poland Ekstraklasa", logo: ""},
  {name: "Widzew Lodz", league: "Poland Ekstraklasa", logo: ""},
  {name: "Wisla Plock", league: "Poland Ekstraklasa", logo: ""},
  {name: "Zaglebie Lubin", league: "Poland Ekstraklasa", logo: ""},
  // Belgium Challenger Pro (14 teams — Beerschot already listed under Jupiler Pro, excluded here)
  {name: "Virton", league: "Belgium Challenger Pro", logo: ""},
  {name: "Lokeren", league: "Belgium Challenger Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/ucnjho1782107350.png"},
  {name: "Eupen", league: "Belgium Challenger Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/tyvrty1464539199.png"},
  {name: "Club NXT", league: "Belgium Challenger Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/3284wh1687872002.png"},
  {name: "Dender EH", league: "Belgium Challenger Pro", logo: ""},
  {name: "Francs Borains", league: "Belgium Challenger Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/22btbw1687871590.png"},
  {name: "Hasselt", league: "Belgium Challenger Pro", logo: ""},
  {name: "Patro Eisden Maasmechelen", league: "Belgium Challenger Pro", logo: ""},
  {name: "Lierse", league: "Belgium Challenger Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/snsyuk1597005625.png"},
  {name: "RFC Liege", league: "Belgium Challenger Pro", logo: ""},
  {name: "RSCA Futures", league: "Belgium Challenger Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/hque4l1782021344.png"},
  {name: "Seraing", league: "Belgium Challenger Pro", logo: ""},
  {name: "Jong Genk", league: "Belgium Challenger Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/lan0qu1655569364.png"},
  {name: "Jong KAA Gent", league: "Belgium Challenger Pro", logo: ""},
  // Denmark Superliga (12 teams)
  {name: "AGF", league: "Denmark Superliga", logo: ""},
  {name: "Brondby", league: "Denmark Superliga", logo: ""},
  {name: "Copenhagen", league: "Denmark Superliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/styqtr1473535513.png"},
  {name: "Fredericia", league: "Denmark Superliga", logo: ""},
  {name: "Midtjylland", league: "Denmark Superliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/s5bpcr1755712262.png"},
  {name: "Nordsjaelland", league: "Denmark Superliga", logo: ""},
  {name: "OB", league: "Denmark Superliga", logo: ""},
  {name: "Randers", league: "Denmark Superliga", logo: "https://r2.thesportsdb.com/images/media/team/badge/w0kmhn1690407779.png"},
  {name: "Silkeborg", league: "Denmark Superliga", logo: ""},
  {name: "Sonderjyske", league: "Denmark Superliga", logo: ""},
  {name: "Vejle", league: "Denmark Superliga", logo: ""},
  {name: "Viborg", league: "Denmark Superliga", logo: ""},
  // Sweden Allsvenskan (16 teams)
  {name: "AIK", league: "Sweden Allsvenskan", logo: "https://r2.thesportsdb.com/images/media/team/badge/rwsrxq1420769503.png"},
  {name: "BK Hacken", league: "Sweden Allsvenskan", logo: ""},
  {name: "Degerfors IF", league: "Sweden Allsvenskan", logo: ""},
  {name: "Djurgardens IF", league: "Sweden Allsvenskan", logo: ""},
  {name: "GAIS", league: "Sweden Allsvenskan", logo: "https://r2.thesportsdb.com/images/media/team/badge/3pahks1639779139.png"},
  {name: "Halmstads BK", league: "Sweden Allsvenskan", logo: ""},
  {name: "Hammarby IF", league: "Sweden Allsvenskan", logo: ""},
  {name: "IF Brommapojkarna", league: "Sweden Allsvenskan", logo: ""},
  {name: "IF Elfsborg", league: "Sweden Allsvenskan", logo: ""},
  {name: "IFK Goteborg", league: "Sweden Allsvenskan", logo: ""},
  {name: "IK Sirius", league: "Sweden Allsvenskan", logo: ""},
  {name: "Kalmar FF", league: "Sweden Allsvenskan", logo: ""},
  {name: "Malmo FF", league: "Sweden Allsvenskan", logo: ""},
  {name: "Mjallby AIF", league: "Sweden Allsvenskan", logo: ""},
  {name: "Orgryte IS", league: "Sweden Allsvenskan", logo: ""},
  {name: "Vasteras SK", league: "Sweden Allsvenskan", logo: ""},
  // Norway Eliteserien (16 teams)
  {name: "Aalesund", league: "Norway Eliteserien", logo: "https://r2.thesportsdb.com/images/media/team/badge/s1br7q1602448285.png"},
  {name: "Bodo/Glimt", league: "Norway Eliteserien", logo: ""},
  {name: "Brann", league: "Norway Eliteserien", logo: "https://r2.thesportsdb.com/images/media/team/badge/ovuad71690695412.png"},
  {name: "Fredrikstad", league: "Norway Eliteserien", logo: "https://r2.thesportsdb.com/images/media/team/badge/9se6qv1690695269.png"},
  {name: "HamKam", league: "Norway Eliteserien", logo: ""},
  {name: "KFUM", league: "Norway Eliteserien", logo: ""},
  {name: "Kristiansund", league: "Norway Eliteserien", logo: "https://r2.thesportsdb.com/images/media/team/badge/wzrjhc1690695847.png"},
  {name: "Lillestrom", league: "Norway Eliteserien", logo: ""},
  {name: "Molde", league: "Norway Eliteserien", logo: "https://r2.thesportsdb.com/images/media/team/badge/apziyg1534866527.png"},
  {name: "Rosenborg", league: "Norway Eliteserien", logo: "https://r2.thesportsdb.com/images/media/team/badge/z483ps1764866361.png"},
  {name: "Sandefjord", league: "Norway Eliteserien", logo: ""},
  {name: "Sarpsborg", league: "Norway Eliteserien", logo: ""},
  {name: "Start", league: "Norway Eliteserien", logo: ""},
  {name: "Tromso", league: "Norway Eliteserien", logo: ""},
  {name: "Viking", league: "Norway Eliteserien", logo: ""},
  {name: "Valerenga", league: "Norway Eliteserien", logo: ""},
  // Mexico Liga de Expansion (15 teams)
  {name: "Atlante", league: "Mexico Liga de Expansion", logo: ""},
  {name: "Atletico La Paz", league: "Mexico Liga de Expansion", logo: ""},
  {name: "Atletico Morelia", league: "Mexico Liga de Expansion", logo: ""},
  {name: "Cancun", league: "Mexico Liga de Expansion", logo: ""},
  {name: "Irapuato", league: "Mexico Liga de Expansion", logo: ""},
  {name: "Jaiba Brava", league: "Mexico Liga de Expansion", logo: "https://r2.thesportsdb.com/images/media/team/badge/ibcdf31754019410.png"},
  {name: "Oaxaca", league: "Mexico Liga de Expansion", logo: ""},
  {name: "Sinaloa", league: "Mexico Liga de Expansion", logo: ""},
  {name: "Tapatio", league: "Mexico Liga de Expansion", logo: ""},
  {name: "Tepatitlan", league: "Mexico Liga de Expansion", logo: ""},
  {name: "Tlaxcala", league: "Mexico Liga de Expansion", logo: ""},
  {name: "UAT", league: "Mexico Liga de Expansion", logo: ""},
  {name: "U. de G.", league: "Mexico Liga de Expansion", logo: ""},
  {name: "Venados", league: "Mexico Liga de Expansion", logo: ""},
  {name: "Zacatecas", league: "Mexico Liga de Expansion", logo: ""},

  // Egyptian Premier League (21 teams)
  {name: "Al Ahly", league: "Egypt Premier League", logo: "https://r2.thesportsdb.com/images/media/team/badge/x8753q1751421890.png"},
  {name: "Ceramica Cleopatra", league: "Egypt Premier League", logo: "https://r2.thesportsdb.com/images/media/team/badge/xy4shs1751422167.png"},
  {name: "ENPPI", league: "Egypt Premier League", logo: "https://www.thesportsdb.com/images/media/team/badge/m6p9ml1787512639.png"},
  {name: "Ghazl El Mahalla", league: "Egypt Premier League", logo: ""},
  {name: "El Gouna", league: "Egypt Premier League", logo: "https://r2.thesportsdb.com/images/media/team/badge/6vdj631589807310.png"},
  {name: "Haras El Hodoud", league: "Egypt Premier League", logo: ""},
  {name: "Ismaily", league: "Egypt Premier League", logo: ""},
  {name: "Al Ittihad", league: "Egypt Premier League", logo: ""},
  {name: "Kahraba Ismailia", league: "Egypt Premier League", logo: ""},
  {name: "Al Masry", league: "Egypt Premier League", logo: "https://r2.thesportsdb.com/images/media/team/badge/3aw86h1589807260.png"},
  {name: "Modern Sport", league: "Egypt Premier League", logo: ""},
  {name: "Al Mokawloon Al Arab", league: "Egypt Premier League", logo: "https://r2.thesportsdb.com/images/media/team/badge/gi170k1589807275.png"},
  {name: "National Bank of Egypt", league: "Egypt Premier League", logo: ""},
  {name: "Petrojet", league: "Egypt Premier League", logo: ""},
  {name: "Pharco", league: "Egypt Premier League", logo: ""},
  {name: "Pyramids", league: "Egypt Premier League", logo: ""},
  {name: "Smouha", league: "Egypt Premier League", logo: ""},
  {name: "Tala'ea El Gaish", league: "Egypt Premier League", logo: ""},
  {name: "Wadi Degla", league: "Egypt Premier League", logo: ""},
  {name: "Zamalek", league: "Egypt Premier League", logo: ""},
  {name: "ZED", league: "Egypt Premier League", logo: ""},

  // South Africa Premiership (16 teams)
  {name: "AmaZulu", league: "South Africa PSL", logo: "https://r2.thesportsdb.com/images/media/team/badge/xcb9e71784744424.png"},
  {name: "Chippa United", league: "South Africa PSL", logo: "https://r2.thesportsdb.com/images/media/team/badge/lzt11b1583614111.png"},
  {name: "Durban City", league: "South Africa PSL", logo: "https://r2.thesportsdb.com/images/media/team/badge/y6gzkf1754524958.png"},
  {name: "Kaizer Chiefs", league: "South Africa PSL", logo: "https://r2.thesportsdb.com/images/media/team/badge/akwtlr1583614121.png"},
  {name: "Lamontville Golden Arrows", league: "South Africa PSL", logo: ""},
  {name: "Magesi", league: "South Africa PSL", logo: ""},
  {name: "Mamelodi Sundowns", league: "South Africa PSL", logo: "https://r2.thesportsdb.com/images/media/team/badge/u3md311784744590.png"},
  {name: "Marumo Gallants", league: "South Africa PSL", logo: "https://r2.thesportsdb.com/images/media/team/badge/u9lft31741035570.png"},
  {name: "Orbit College", league: "South Africa PSL", logo: ""},
  {name: "Orlando Pirates", league: "South Africa PSL", logo: "https://r2.thesportsdb.com/images/media/team/badge/y6dbv61583616330.png"},
  {name: "Polokwane City", league: "South Africa PSL", logo: ""},
  {name: "Richards Bay", league: "South Africa PSL", logo: ""},
  {name: "Sekhukhune United", league: "South Africa PSL", logo: ""},
  {name: "Siwelele", league: "South Africa PSL", logo: ""},
  {name: "Stellenbosch", league: "South Africa PSL", logo: ""},
  {name: "TS Galaxy", league: "South Africa PSL", logo: ""},

  // Morocco Botola Pro (16 teams)
  {name: "US Yacoub El Mansour", league: "Morocco Botola", logo: ""},
  {name: "COD Meknes", league: "Morocco Botola", logo: ""},
  {name: "DH El-Jadida", league: "Morocco Botola", logo: ""},
  {name: "AS FAR", league: "Morocco Botola", logo: ""},
  {name: "FUS Rabat", league: "Morocco Botola", logo: "https://r2.thesportsdb.com/images/media/team/badge/vxk3aj1551518378.png"},
  {name: "HUS Agadir", league: "Morocco Botola", logo: ""},
  {name: "IR Tangier", league: "Morocco Botola", logo: ""},
  {name: "MAS", league: "Morocco Botola", logo: ""},
  {name: "Olympique Dcheira", league: "Morocco Botola", logo: "https://r2.thesportsdb.com/images/media/team/badge/o4v33g1727196921.png"},
  {name: "OC Safi", league: "Morocco Botola", logo: ""},
  {name: "Raja CA", league: "Morocco Botola", logo: ""},
  {name: "RCA Zemamra", league: "Morocco Botola", logo: ""},
  {name: "RS Berkane", league: "Morocco Botola", logo: ""},
  {name: "KAC Marrakech", league: "Morocco Botola", logo: ""},
  {name: "UTS Rabat", league: "Morocco Botola", logo: ""},
  {name: "Wydad AC", league: "Morocco Botola", logo: ""},

  // USA USL Championship (25 teams)
  {name: "Birmingham Legion FC", league: "USA USL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/8uw1mc1629299635.png"},
  {name: "Brooklyn FC", league: "USA USL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/p4tzze1765559400.png"},
  {name: "Charleston Battery", league: "USA USL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/uqx34i1690266678.png"},
  {name: "Colorado Springs Switchbacks FC", league: "USA USL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/oql6wu1629304849.png"},
  {name: "Detroit City FC", league: "USA USL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/aw7ceo1688514082.png"},
  {name: "El Paso Locomotive FC", league: "USA USL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/gsjebh1688514517.png"},
  {name: "FC Tulsa", league: "USA USL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/nyfdw21580480972.png"},
  {name: "Hartford Athletic", league: "USA USL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/dhbu3l1690266780.png"},
  {name: "Indy Eleven", league: "USA USL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/rxtrtp1431625996.png"},
  {name: "Las Vegas Lights FC", league: "USA USL Championship", logo: "https://r2.thesportsdb.com/images/media/team/badge/wr69xv1629387151.png"},
  {name: "Lexington SC", league: "USA USL Championship", logo: ""},
  {name: "Loudoun United FC", league: "USA USL Championship", logo: ""},
  {name: "Louisville City FC", league: "USA USL Championship", logo: ""},
  {name: "Miami FC", league: "USA USL Championship", logo: ""},
  {name: "Monterey Bay FC", league: "USA USL Championship", logo: ""},
  {name: "New Mexico United", league: "USA USL Championship", logo: ""},
  {name: "Oakland Roots SC", league: "USA USL Championship", logo: ""},
  {name: "Orange County SC", league: "USA USL Championship", logo: ""},
  {name: "Phoenix Rising FC", league: "USA USL Championship", logo: ""},
  {name: "Pittsburgh Riverhounds SC", league: "USA USL Championship", logo: ""},
  {name: "Rhode Island FC", league: "USA USL Championship", logo: ""},
  {name: "Sacramento Republic FC", league: "USA USL Championship", logo: ""},
  {name: "San Antonio FC", league: "USA USL Championship", logo: ""},
  {name: "Sporting Club Jacksonville", league: "USA USL Championship", logo: ""},
  {name: "Tampa Bay Rowdies", league: "USA USL Championship", logo: ""},

  // Japan J2 League (20 teams)
  {name: "Albirex Niigata", league: "Japan J2 League", logo: "https://r2.thesportsdb.com/images/media/team/badge/l16fvz1590070788.png"},
  {name: "Blaublitz Akita", league: "Japan J2 League", logo: "https://r2.thesportsdb.com/images/media/team/badge/mi64031706246538.png"},
  {name: "FC Imabari", league: "Japan J2 League", logo: "https://r2.thesportsdb.com/images/media/team/badge/s3f0u11617289673.png"},
  {name: "Fujieda MYFC", league: "Japan J2 League", logo: "https://r2.thesportsdb.com/images/media/team/badge/4vjy3y1617289642.png"},
  {name: "Hokkaido Consadole Sapporo", league: "Japan J2 League", logo: "https://r2.thesportsdb.com/images/media/team/badge/it2q671578253723.png"},
  {name: "Iwaki FC", league: "Japan J2 League", logo: "https://r2.thesportsdb.com/images/media/team/badge/w3igvh1638823138.png"},
  {name: "Jubilo Iwata", league: "Japan J2 League", logo: ""},
  {name: "Kataller Toyama", league: "Japan J2 League", logo: "https://r2.thesportsdb.com/images/media/team/badge/wri77d1617289688.png"},
  {name: "Montedio Yamagata", league: "Japan J2 League", logo: "https://r2.thesportsdb.com/images/media/team/badge/e9nykx1639487487.png"},
  {name: "Oita Trinita", league: "Japan J2 League", logo: "https://r2.thesportsdb.com/images/media/team/badge/kwyqsd1578239318.png"},
  {name: "RB Omiya Ardija", league: "Japan J2 League", logo: ""},
  {name: "Sagan Tosu", league: "Japan J2 League", logo: ""},
  {name: "Shonan Bellmare", league: "Japan J2 League", logo: ""},
  {name: "Tegevajaro Miyazaki", league: "Japan J2 League", logo: ""},
  {name: "Tochigi City", league: "Japan J2 League", logo: ""},
  {name: "Tokushima Vortis", league: "Japan J2 League", logo: ""},
  {name: "Vanraure Hachinohe", league: "Japan J2 League", logo: ""},
  {name: "Vegalta Sendai", league: "Japan J2 League", logo: ""},
  {name: "Ventforet Kofu", league: "Japan J2 League", logo: ""},
  {name: "Yokohama FC", league: "Japan J2 League", logo: ""},

  // South Korea K League 2 (17 teams)
  {name: "Ansan Greeners", league: "South Korea K League 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/gexjp81589557325.png"},
  {name: "Busan IPark", league: "South Korea K League 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/rc0vie1579473061.png"},
  {name: "Cheonan City", league: "South Korea K League 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/k53cdm1675284630.png"},
  {name: "Chungbuk Cheongju", league: "South Korea K League 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/mfbqxb1675284633.png"},
  {name: "Chungnam Asan", league: "South Korea K League 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/1tyyd81589558128.png"},
  {name: "Daegu FC", league: "South Korea K League 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/xzjzn11579473073.png"},
  {name: "Gimhae FC", league: "South Korea K League 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/hhi8821771815980.png"},
  {name: "Gimpo FC", league: "South Korea K League 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/wz3j6u1643554653.png"},
  {name: "Gyeongnam FC", league: "South Korea K League 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/nzy70n1581348710.png"},
  {name: "Hwaseong FC", league: "South Korea K League 2", logo: "https://r2.thesportsdb.com/images/media/team/badge/fej1mc1736208077.png"},
  {name: "Jeonnam Dragons", league: "South Korea K League 2", logo: ""},
  {name: "Paju Frontier", league: "South Korea K League 2", logo: ""},
  {name: "Seongnam FC", league: "South Korea K League 2", logo: ""},
  {name: "Seoul E-Land", league: "South Korea K League 2", logo: ""},
  {name: "Suwon FC", league: "South Korea K League 2", logo: ""},
  {name: "Suwon Samsung Bluewings", league: "South Korea K League 2", logo: ""},
  {name: "Yongin FC", league: "South Korea K League 2", logo: ""},

  // Australia A-League Men (12 teams)
  {name: "Adelaide United", league: "Australia A-League", logo: "https://r2.thesportsdb.com/images/media/team/badge/wpyuwv1473454602.png"},
  {name: "Auckland FC", league: "Australia A-League", logo: "https://r2.thesportsdb.com/images/media/team/badge/f36lst1730017502.png"},
  {name: "Brisbane Roar", league: "Australia A-League", logo: "https://r2.thesportsdb.com/images/media/team/badge/sypxsu1473454634.png"},
  {name: "Central Coast Mariners", league: "Australia A-League", logo: "https://r2.thesportsdb.com/images/media/team/badge/ncdx4p1759642161.png"},
  {name: "Macarthur FC", league: "Australia A-League", logo: "https://r2.thesportsdb.com/images/media/team/badge/9gr66g1579348350.png"},
  {name: "Melbourne City", league: "Australia A-League", logo: "https://r2.thesportsdb.com/images/media/team/badge/rkeqme1603301840.png"},
  {name: "Melbourne Victory", league: "Australia A-League", logo: "https://r2.thesportsdb.com/images/media/team/badge/wwvsqx1473454564.png"},
  {name: "Newcastle Jets", league: "Australia A-League", logo: "https://r2.thesportsdb.com/images/media/team/badge/5jevk91653487832.png"},
  {name: "Perth Glory", league: "Australia A-League", logo: "https://r2.thesportsdb.com/images/media/team/badge/2c9k5p1679114095.png"},
  {name: "Sydney FC", league: "Australia A-League", logo: "https://r2.thesportsdb.com/images/media/team/badge/utgq8z1546110747.png"},
  {name: "Wellington Phoenix", league: "Australia A-League", logo: ""},
  {name: "Western Sydney Wanderers", league: "Australia A-League", logo: ""},

  // UAE Pro League (14 teams)
  {name: "Ajman", league: "UAE Pro League", logo: "https://r2.thesportsdb.com/images/media/team/badge/zohyna1677576452.png"},
  {name: "Al Ain", league: "UAE Pro League", logo: "https://r2.thesportsdb.com/images/media/team/badge/0w2bk51747334688.png"},
  {name: "Al Bataeh", league: "UAE Pro League", logo: ""},
  {name: "Al Dhafra", league: "UAE Pro League", logo: "https://r2.thesportsdb.com/images/media/team/badge/613mvk1753982733.png"},
  {name: "Al Jazira", league: "UAE Pro League", logo: "https://r2.thesportsdb.com/images/media/team/badge/uknsoq1642708421.png"},
  {name: "Al Nasr", league: "UAE Pro League", logo: "https://r2.thesportsdb.com/images/media/team/badge/oy1zwv1753982526.png"},
  {name: "Al Wahda", league: "UAE Pro League", logo: "https://r2.thesportsdb.com/images/media/team/badge/99xc7w1578858847.png"},
  {name: "Al Wasl", league: "UAE Pro League", logo: "https://r2.thesportsdb.com/images/media/team/badge/s3o3ew1578859398.png"},
  {name: "Baniyas", league: "UAE Pro League", logo: "https://r2.thesportsdb.com/images/media/team/badge/ps3a4d1578859691.png"},
  {name: "Dibba", league: "UAE Pro League", logo: ""},
  {name: "Kalba", league: "UAE Pro League", logo: ""},
  {name: "Khor Fakkan", league: "UAE Pro League", logo: ""},
  {name: "Shabab Al Ahli", league: "UAE Pro League", logo: ""},
  {name: "Sharjah", league: "UAE Pro League", logo: ""},

  // MLS Next Pro (30 teams)
  {name: "Atlanta United 2", league: "MLS Next Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/6751ru1629299588.png"},
  {name: "Austin FC II", league: "MLS Next Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/9y5mkc1679308384.png"},
  {name: "Carolina Core FC", league: "MLS Next Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/3dgiwx1707991293.png"},
  {name: "Chattanooga FC", league: "MLS Next Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/d30qj01629233922.png"},
  {name: "Chicago Fire FC II", league: "MLS Next Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/ughimp1708353226.png"},
  {name: "FC Cincinnati 2", league: "MLS Next Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/lwbgar1648907178.png"},
  {name: "Colorado Rapids 2", league: "MLS Next Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/6ualhm1648907159.png"},
  {name: "Columbus Crew 2", league: "MLS Next Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/2wm0d91648907172.png"},
  {name: "Crown Legacy FC", league: "MLS Next Pro", logo: "https://r2.thesportsdb.com/images/media/team/badge/ft599y1679308389.png"},
  {name: "CT United FC", league: "MLS Next Pro", logo: ""},
  {name: "Houston Dynamo 2", league: "MLS Next Pro", logo: ""},
  {name: "Huntsville City FC", league: "MLS Next Pro", logo: ""},
  {name: "Inter Miami CF II", league: "MLS Next Pro", logo: ""},
  {name: "Los Angeles FC 2", league: "MLS Next Pro", logo: ""},
  {name: "Minnesota United FC 2", league: "MLS Next Pro", logo: ""},
  {name: "New England Revolution II", league: "MLS Next Pro", logo: ""},
  {name: "New York City FC II", league: "MLS Next Pro", logo: ""},
  {name: "New York Red Bulls II", league: "MLS Next Pro", logo: ""},
  {name: "North Texas SC", league: "MLS Next Pro", logo: ""},
  {name: "Orlando City B", league: "MLS Next Pro", logo: ""},
  {name: "Philadelphia Union II", league: "MLS Next Pro", logo: ""},
  {name: "Portland Timbers 2", league: "MLS Next Pro", logo: ""},
  {name: "Real Monarchs", league: "MLS Next Pro", logo: ""},
  {name: "San Jose Earthquakes II", league: "MLS Next Pro", logo: ""},
  {name: "Sporting Kansas City II", league: "MLS Next Pro", logo: ""},
  {name: "St. Louis City 2", league: "MLS Next Pro", logo: ""},
  {name: "Tacoma Defiance", league: "MLS Next Pro", logo: ""},
  {name: "Toronto FC II", league: "MLS Next Pro", logo: ""},
  {name: "Ventura County FC", league: "MLS Next Pro", logo: ""},
  {name: "Whitecaps FC 2", league: "MLS Next Pro", logo: ""}
];

// Real, verified league badges pulled directly from TheSportsDB's own
// lookupleague.php for each of our 14 league IDs — unlike the old guessed
// Wikipedia URLs, these are confirmed to actually exist.
const leagueLogos = {
  "Premier League": "https://r2.thesportsdb.com/images/media/league/badge/gasy9d1737743125.png",
  "La Liga": "https://r2.thesportsdb.com/images/media/league/badge/ja4it51687628717.png",
  "Serie A": "https://r2.thesportsdb.com/images/media/league/badge/67q3q21679951383.png",
  "Ligue 1": "https://r2.thesportsdb.com/images/media/league/badge/9f7z9d1742983155.png",
  "Saudi Pro": "https://r2.thesportsdb.com/images/media/league/badge/w67i621701772123.png",
  "Bundesliga": "https://r2.thesportsdb.com/images/media/league/badge/teqh1b1679952008.png",
  "Eredivisie": "https://r2.thesportsdb.com/images/media/league/badge/5cdsu21725984946.png",
  "Primeira Liga": "https://r2.thesportsdb.com/images/media/league/badge/3tgdke1782689102.png",
  "Super Lig": "https://r2.thesportsdb.com/images/media/league/badge/dikktz1785779891.png",
  "Scottish Prem": "https://r2.thesportsdb.com/images/media/league/badge/72d3zc1688333496.png",
  "Russian PL": "https://r2.thesportsdb.com/images/media/league/badge/d4yp7g1690178551.png",
  "Brasileirao": "https://r2.thesportsdb.com/images/media/league/badge/lywv7t1766787179.png",
  "Super League GR": "https://r2.thesportsdb.com/images/media/league/badge/sni7f51782459204.png",
  "Jupiler Pro": "https://r2.thesportsdb.com/images/media/league/badge/xj8azr1786316931.png",
  "MLS": "https://r2.thesportsdb.com/images/media/league/badge/dqo6r91549878326.png",
  "Liga Profesional Argentina": "https://r2.thesportsdb.com/images/media/league/badge/rk9xhx1768238251.png",
  "Austrian Bundesliga": "https://r2.thesportsdb.com/images/media/league/badge/vcgyu71686617925.png",
  "Austrian Erste Liga": "https://r2.thesportsdb.com/images/media/league/badge/cfk37g1583582239.png",
  "EFL Championship": "https://r2.thesportsdb.com/images/media/league/badge/ty5a681688770169.png",
  "La Liga 2": "https://r2.thesportsdb.com/images/media/league/badge/r7u6821688425700.png",
  "Ligue 2": "https://r2.thesportsdb.com/images/media/league/badge/aofb771742983333.png",
  "Serie B": "https://r2.thesportsdb.com/images/media/league/badge/uf5kph1598011132.png",
  "2. Bundesliga": "https://r2.thesportsdb.com/images/media/league/badge/hl40981534764789.png",
  "Nigeria NPFL": "https://r2.thesportsdb.com/images/media/league/badge/k4hgin1590183498.png",
  "Brazil Serie B": "https://r2.thesportsdb.com/images/media/league/badge/iiz0gf1778446845.png",
  "Argentina Primera Nacional": "https://r2.thesportsdb.com/images/media/league/badge/u5tbaw1762466392.png",
  "Turkey 1.Lig": "https://r2.thesportsdb.com/images/media/league/badge/teu8g81784991514.png",
  "Poland Ekstraklasa": "https://r2.thesportsdb.com/images/media/league/badge/l3jovw1516960585.png",
  "Belgium Challenger Pro": "https://r2.thesportsdb.com/images/media/league/badge/2nwcvo1786316608.png",
  "Denmark Superliga": "https://r2.thesportsdb.com/images/media/league/badge/28uq381687624585.png",
  "Sweden Allsvenskan": "https://r2.thesportsdb.com/images/media/league/badge/denok11707459183.png",
  "Norway Eliteserien": "https://r2.thesportsdb.com/images/media/league/badge/owo80l1512822583.png",
  "Mexico Liga de Expansion": "https://r2.thesportsdb.com/images/media/league/badge/2h0yz01615330546.png",
  "Egypt Premier League": "https://r2.thesportsdb.com/images/media/league/badge/v0iz601786057987.png",
  "South Africa PSL": "https://r2.thesportsdb.com/images/media/league/badge/e59xj11725174551.png",
  "Morocco Botola": "https://r2.thesportsdb.com/images/media/league/badge/bhuork1638558615.png",
  "USA USL Championship": "https://r2.thesportsdb.com/images/media/league/badge/uh4zas1688513782.png",
  "Japan J2 League": "https://r2.thesportsdb.com/images/media/league/badge/b3xlmj1675170570.png",
  "South Korea K League 2": "https://r2.thesportsdb.com/images/media/league/badge/p9k1qn1628430716.png",
  "Australia A-League": "https://r2.thesportsdb.com/images/media/league/badge/2u78lm1638459575.png",
  "UAE Pro League": "https://r2.thesportsdb.com/images/media/league/badge/95pes01643234997.png",
  "MLS Next Pro": "https://r2.thesportsdb.com/images/media/league/badge/vokzs71650475719.png"
};

// Curated "marquee" clubs per league used to pick an eye-catching featured match.
const marqueeClubs = [
  "Arsenal", "Manchester United", "Manchester City", "Liverpool", "Chelsea", "Tottenham Hotspur",
  "Real Madrid", "Barcelona", "Atletico Madrid",
  "AC Milan", "Inter Milan", "Juventus", "AS Roma", "Napoli",
  "Paris Saint-Germain", "Marseille", "Lyon", "Monaco",
  "Al Hilal", "Al Nassr", "Al Ittihad", "Al Ahli",
  "Bayern Munich", "Borussia Dortmund", "RB Leipzig",
  "Ajax", "PSV Eindhoven", "Feyenoord",
  "Benfica", "Porto", "Sporting CP",
  "Galatasaray", "Fenerbahce", "Besiktas",
  "Celtic", "Rangers",
  "Zenit", "Spartak Moscow",
  "Flamengo", "Palmeiras", "Corinthians", "Sao Paulo",
  "Olympiacos", "Panathinaikos",
  "Club Brugge", "Anderlecht"
];

// --- Broken-image safety net: any team/league badge that fails to load
// falls back to a generated initials avatar instead of showing a blank icon.
function initialsAvatar(name) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const palette = ["#00c853", "#2962ff", "#ff6d00", "#d500f9", "#00b8d4", "#c51162", "#6200ea"];
  let hash = 0;
  for (const ch of name) hash = ch.charCodeAt(0) + ((hash << 5) - hash);
  const color = palette[Math.abs(hash) % palette.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
    <rect width='40' height='40' rx='8' fill='${color}'/>
    <text x='50%' y='55%' font-family='Inter,Arial,sans-serif' font-size='16' fill='white'
      text-anchor='middle' dominant-baseline='middle' font-weight='700'>${initials}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// A plain jersey silhouette reads more clearly as "no photo for this player"
// than the colored-initials avatar used for team/league badges elsewhere.
function jerseyIcon() {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
    <rect width='40' height='40' rx='8' fill='#1a2230'/>
    <path d='M13 8 L8 13 L11 17 L13 15 L13 32 L27 32 L27 15 L29 17 L32 13 L27 8 L23 11 Q20 13 17 11 Z'
      fill='none' stroke='#5b6b82' stroke-width='2' stroke-linejoin='round'/>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function playerPhotoImg(photo, name, cssClass) {
  const src = photo || jerseyIcon();
  // jerseyIcon()'s data URI has unescaped single quotes (encodeURIComponent
  // doesn't touch them), so it can't be inlined as a '...'-quoted JS string
  // literal here — call the function directly instead of embedding its value.
  return `<img class="${cssClass}" src="${src}" alt="${name}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src=jerseyIcon();">`;
}

function onBadgeError(imgEl, name) {
  imgEl.onerror = null;
  imgEl.src = initialsAvatar(name);
}

// --- Deep linking: reflect the open team/match modal in the URL
// (?team=/?match=/?livematch=) via pushState, so a link can be shared and
// the back button closes the modal instead of leaving the page. Only real
// identifiers already in memory are used — never anything invented.
let suppressUrlPush = false; // set while restoring state from popstate/initial load

function teamSlug(name) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function pushModalUrl(param, value) {
  if (suppressUrlPush) return;
  const current = new URLSearchParams(window.location.search);
  // openTeamModal resolves its team ID asynchronously, so this can fire
  // after a popstate replay already put the URL in this exact state (its
  // own suppressUrlPush window closes before that awaited call returns) —
  // skip the redundant push rather than corrupt the back/forward stack
  // with a duplicate entry.
  if (current.get(param) === value && [...current.keys()].length === 1) return;
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set(param, value);
  history.pushState({ [param]: value }, "", url);
}

function clearModalUrl() {
  if (suppressUrlPush) return;
  const url = new URL(window.location.href);
  if (!url.search) return; // already clean — avoid a redundant history entry
  url.search = "";
  history.pushState({}, "", url);
}

// Opens whichever modal (if any) the current URL's query string points to.
// Called once on initial load (after fixtures/live data are in memory) and
// again on every popstate (back/forward). Silently does nothing if the
// referenced team/match can't be resolved yet (e.g. a match from a
// different date than what's currently loaded) rather than erroring.
function applyUrlState() {
  const params = new URLSearchParams(window.location.search);
  const teamParam = params.get("team");
  const matchParam = params.get("match");
  const liveParam = params.get("livematch");

  if (!teamParam && document.getElementById("teamModal").classList.contains("open")) closeTeamModal();
  if (!matchParam && document.getElementById("matchModal").classList.contains("open")) closeMatchModal();
  if (!liveParam && document.getElementById("liveMatchModal").classList.contains("open")) closeLiveMatchModal();

  if (teamParam) {
    const team = allTeams.find(t => teamSlug(t.name) === teamParam);
    if (team) openTeamModal(team.id, team.name, team.logo, team.league);
  }
  if (matchParam && fixturesById[matchParam]) {
    openMatchModal(matchParam);
  }
  if (liveParam && liveFixturesById[liveParam]) {
    openLiveMatchModal(liveParam);
  }
}

window.addEventListener("popstate", () => {
  suppressUrlPush = true;
  applyUrlState();
  suppressUrlPush = false;
});

const matchesDiv = document.getElementById("matches");
let activeLeague = "All";
let searchTerm = "";

function skeletonRows(count) {
  return `<div>${Array.from({ length: count }, () => `<div class="skeleton-row"></div>`).join("")}</div>`;
}

function skeletonBlock() {
  return `<div class="skeleton-block"></div><div class="skeleton-block" style="width:70%"></div><div class="skeleton-block" style="width:40%"></div>`;
}

// --- Favorites: real localStorage persistence, keyed by match ID. Starring
// a match highlights it and pins it into a dedicated section at the very
// top of the list (in addition to its normal spot in its league group),
// for as long as that match is still in the currently-loaded window.
const FAVORITES_KEY = "goalhub_favorite_matches";

function getFavoriteIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]"));
  } catch (err) {
    return new Set();
  }
}

function isFavorited(matchId) {
  return getFavoriteIds().has(String(matchId));
}

function toggleFavorite(matchId) {
  const favs = getFavoriteIds();
  const id = String(matchId);
  if (favs.has(id)) favs.delete(id);
  else favs.add(id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favs]));
  loadMatches();
}

// --- Real data via TheSportsDB's public free API (key "123" is their
// documented open test key, not a secret — meant to be used client-side).
const SPORTSDB_KEY = "123";
const SPORTSDB_BASE = `https://www.thesportsdb.com/api/v1/json/${SPORTSDB_KEY}`;

// Our own Cloudflare Worker, hosting the per-match chat + prediction rooms
// (see api-proxy/worker.js — the ChatRoom Durable Object).
const CHAT_WORKER_BASE = "https://goalhub-api-proxy.betterdays-goalhub.workers.dev"

// --- Auth: email magic-link login (see api-proxy/worker.js for the server
// side). The JWT is the only thing that proves who's signed in — it's kept
// in localStorage so a reload doesn't sign the user out, and attached as a
// Bearer token on every authenticated request.
const AUTH_JWT_KEY = "goalhub_jwt";

function getAuthToken() {
  return localStorage.getItem(AUTH_JWT_KEY);
}

function setAuthToken(token) {
  localStorage.setItem(AUTH_JWT_KEY, token);
}

function clearAuthToken() {
  localStorage.removeItem(AUTH_JWT_KEY);
}

function isLoggedIn() {
  return !!getAuthToken();
}

// Kicks off the login flow: asks the Worker to create a magic link for this
// email. In dev mode (no domain onboarded for Email Sending yet — see
// worker.js) the response includes the link directly instead of only
// emailing it, so login can be tested without a real inbox.
async function sendMagicLink(email) {
  const res = await fetch(`${CHAT_WORKER_BASE}/api/auth/send-magic-link`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Couldn't send the sign-in link.");
  }
  return res.json(); // { ok, emailSent, devMagicLink? }
}

// Call once on page load. If the URL has ?auth_token=... (from clicking the
// magic link, or the dev-mode link above), redeems it for a JWT, stores it,
// and strips the token out of the URL so it isn't left sitting in history.
async function handleAuthCallback() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("auth_token");
  if (!token) return null;

  params.delete("auth_token");
  const cleanUrl = window.location.pathname + (params.toString() ? `?${params}` : "") + window.location.hash;
  window.history.replaceState({}, "", cleanUrl);

  const res = await fetch(`${CHAT_WORKER_BASE}/api/auth/verify?token=${encodeURIComponent(token)}`);
  if (!res.ok) return null;
  const data = await res.json();
  setAuthToken(data.token);
  return data.user;
}

// Returns the signed-in user's data, or null if not signed in / the session
// was revoked server-side. Clears a stale/invalid local token automatically.
async function getCurrentUser() {
  const token = getAuthToken();
  if (!token) return null;
  const res = await fetch(`${CHAT_WORKER_BASE}/api/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) {
    clearAuthToken();
    return null;
  }
  const data = await res.json();
  return data.user;
}

let currentUser = null;

function logout() {
  clearAuthToken();
  currentUser = null;
  serverFavoritesByName = null;
  myPredictionsByFixture = null;
  renderAuthArea();
  closeAuthModal();
  // Server-side favorites are per-account — drop back to whatever's in
  // localStorage (or nothing) rather than leaving the signed-out UI showing
  // another account's saved teams.
  if (viewMode === "favorites" || viewMode === "teams") renderAllTeams();
  else if (viewMode === "matches") loadMatches();
}

function renderAuthArea() {
  const btn = document.getElementById("authBtn");
  if (currentUser) {
    btn.textContent = "My Account";
    btn.classList.add("logged-in");
  } else {
    btn.textContent = "Login";
    btn.classList.remove("logged-in");
  }
}

function openAuthModal() {
  document.getElementById("authModal").classList.add("open");
  if (currentUser) {
    document.getElementById("authModalContent").innerHTML = `
      <div class="auth-form-title">My Account</div>
      <div class="auth-account-email">${currentUser.email}</div>
      <button class="auth-logout-btn" onclick="logout()">Log out</button>`;
  } else {
    showLoginForm();
  }
}

function closeAuthModal() {
  document.getElementById("authModal").classList.remove("open");
}

function showLoginForm() {
  document.getElementById("authModalContent").innerHTML = `
    <div class="auth-form-title">Log in to GoalHub</div>
    <div class="auth-form-sub">No password — we'll email you a one-click sign-in link.</div>
    <form onsubmit="submitMagicLinkForm(event)">
      <input type="email" class="auth-email-input" id="authEmailInput" placeholder="you@example.com" required>
      <button type="submit" class="auth-submit-btn" id="authSubmitBtn">Send sign-in link</button>
    </form>
    <div id="authStatusMsg"></div>`;
}

async function submitMagicLinkForm(event) {
  event.preventDefault();
  const email = document.getElementById("authEmailInput").value.trim();
  const btn = document.getElementById("authSubmitBtn");
  const status = document.getElementById("authStatusMsg");
  btn.disabled = true;
  btn.textContent = "Sending…";
  status.innerHTML = "";

  try {
    const result = await sendMagicLink(email);
    if (result.emailSent) {
      status.innerHTML = `<div class="auth-status-msg">Check <strong>${email}</strong> for your sign-in link. It expires in 15 minutes.</div>`;
      btn.style.display = "none";
    } else {
      // Dev mode: no domain onboarded for Email Sending yet, so the link
      // can't actually be delivered — show it directly instead.
      status.innerHTML = `<div class="auth-status-msg">Email sending isn't set up yet — here's your dev sign-in link:<br><a href="${result.devMagicLink}">${result.devMagicLink}</a></div>`;
      btn.disabled = false;
      btn.textContent = "Send sign-in link";
    }
  } catch (err) {
    status.innerHTML = `<div class="auth-status-msg">${err.message}</div>`;
    btn.disabled = false;
    btn.textContent = "Send sign-in link";
  }
}

// Bootstraps auth on page load: redeems ?auth_token= if present, then checks
// for an existing session, and reflects whichever state wins in the header.
async function initAuth() {
  const fromCallback = await handleAuthCallback();
  currentUser = fromCallback || await getCurrentUser();
  renderAuthArea();
  if (currentUser) {
    await Promise.all([fetchServerFavorites(), fetchMyPredictions(), fetchNotifyPrefs()]);
    renderLiveNowSection();
    if (viewMode === "favorites" || viewMode === "teams") renderAllTeams();
    else if (viewMode === "matches") loadMatches();
  }
}

// Leagues where the Worker can fetch a full, untruncated standings table via
// football-data.org's free tier (proxied through /standings — see worker.js).
// Any league not listed here falls back to TheSportsDB's free lookuptable.php,
// which only ever returns the top 5 rows.
const STANDINGS_LEAGUES = {
  "Premier League": "PL",
  "La Liga": "PD",
  "Serie A": "SA",
  "Ligue 1": "FL1",
  "Bundesliga": "BL1",
  "Eredivisie": "DED",
  "Primeira Liga": "PPL",
  "Brasileirao": "BSA"
};

const LEAGUE_IDS = {
  "Premier League": 4328,
  "La Liga": 4335,
  "Serie A": 4332,
  "Ligue 1": 4334,
  "Saudi Pro": 4668,
  "Bundesliga": 4331,
  "Eredivisie": 4337,
  "Primeira Liga": 4344,
  "Super Lig": 4339,
  "Scottish Prem": 4330,
  "Russian PL": 4355,
  "Brasileirao": 4351,
  "Super League GR": 4336,
  "Jupiler Pro": 4338,
  "MLS": 4346,
  "Liga Profesional Argentina": 4406,
  "Austrian Bundesliga": 4621,
  "Austrian Erste Liga": 4796,
  "EFL Championship": 4329,
  "La Liga 2": 4400,
  "Ligue 2": 4401,
  "Serie B": 4394,
  "2. Bundesliga": 4399,
  "Nigeria NPFL": 4827,
  "Brazil Serie B": 4404,
  "Argentina Primera Nacional": 4616,
  "Turkey 1.Lig": 4676,
  "Poland Ekstraklasa": 4422,
  "Belgium Challenger Pro": 4623,
  "Denmark Superliga": 4340,
  "Sweden Allsvenskan": 4347,
  "Norway Eliteserien": 4358,
  "Mexico Liga de Expansion": 4654,
  "Egypt Premier League": 4829,
  "South Africa PSL": 4802,
  "Morocco Botola": 4520,
  "USA USL Championship": 4684,
  "Japan J2 League": 4824,
  "South Korea K League 2": 4822,
  "Australia A-League": 4356,
  "UAE Pro League": 4678,
  "MLS Next Pro": 5279
};

function badgeImg(logo, name, cssClass) {
  // An empty/missing src doesn't reliably fire onerror in every browser, so
  // when there's no logo URL at all (no API badge and no fallback match),
  // go straight to the initials avatar instead of leaving <img src=""> to
  // silently render blank.
  const src = logo || initialsAvatar(name);
  return `<img class="${cssClass}" src="${src}" alt="${name}" loading="lazy" decoding="async" onerror="onBadgeError(this,'${name.replace(/'/g, "")}')">`;
}

// The API doesn't always supply a team badge on the events-by-day endpoint;
// fall back to our own curated logo for that team name if we have one.
function resolveLogo(apiBadge, teamName) {
  if (apiBadge) return apiBadge;
  const known = allTeams.find(t => t.name.toLowerCase() === teamName.toLowerCase());
  return known ? known.logo : "";
}

function clickableTeam(team) {
  return `<div class="match-team" onclick="event.stopPropagation(); openTeamModal('${team.id}','${team.name.replace(/'/g, "")}','${team.logo}','${team.league.replace(/'/g, "")}')">${badgeImg(team.logo, team.name, "")}<span>${team.name}</span></div>`;
}

// Plain-English status labels instead of raw API codes (picked up from how
// LiveScore/Sofascore/365Scores all phrase these).
const STATUS_LABELS = {
  FT: "Ended",
  AET: "After ET",
  PEN: "After Pens",
  HT: "Half-time",
  "1H": "1st Half",
  "2H": "2nd Half",
  ET: "Extra Time"
};

function isLiveStatus(status) {
  return !!status && !["NS", "FT", "AET", "PEN", "PST", "CANC", "ABD"].includes(status);
}

function isFinishedStatus(status) {
  return status === "FT" || status === "AET" || status === "PEN";
}

function matchStatusDisplay(f) {
  const hasScore = f.homeScore !== null && f.homeScore !== undefined && f.awayScore !== null && f.awayScore !== undefined;
  if (!hasScore || f.status === "NS" || !f.status) {
    return { primary: f.time || "TBD", tag: "" };
  }
  // TheSportsDB's free tier doesn't expose a live match minute — without
  // this, a live game here would only ever show a static "1st Half"/
  // "Half-time" label instead of an actual, moving clock. It does link
  // each event to its real API-Football fixture ID (idAPIfootball), so
  // when that same match is also present in the Live Now data we already
  // fetched (real minutes, from API-Football), use its real minute instead.
  if (isLiveStatus(f.status) && f.apiFootballId && liveFixturesById[f.apiFootballId]) {
    return { primary: `${f.homeScore} - ${f.awayScore}`, tag: afMinuteLabel(liveFixturesById[f.apiFootballId]) };
  }
  const label = STATUS_LABELS[f.status] || f.status || "LIVE";
  return { primary: `${f.homeScore} - ${f.awayScore}`, tag: label };
}

const LEAGUE_COUNTRY = {
  "Premier League": "England",
  "La Liga": "Spain",
  "Serie A": "Italy",
  "Ligue 1": "France",
  "Saudi Pro": "Saudi Arabia",
  "Bundesliga": "Germany",
  "Eredivisie": "Netherlands",
  "Primeira Liga": "Portugal",
  "Super Lig": "Turkey",
  "Scottish Prem": "Scotland",
  "Russian PL": "Russia",
  "Brasileirao": "Brazil",
  "Super League GR": "Greece",
  "Jupiler Pro": "Belgium",
  "MLS": "USA/Canada",
  "Liga Profesional Argentina": "Argentina",
  "Austrian Bundesliga": "Austria",
  "Austrian Erste Liga": "Austria",
  "EFL Championship": "England",
  "La Liga 2": "Spain",
  "Ligue 2": "France",
  "Serie B": "Italy",
  "2. Bundesliga": "Germany",
  "Nigeria NPFL": "Nigeria",
  "Brazil Serie B": "Brazil",
  "Argentina Primera Nacional": "Argentina",
  "Turkey 1.Lig": "Turkey",
  "Poland Ekstraklasa": "Poland",
  "Belgium Challenger Pro": "Belgium",
  "Denmark Superliga": "Denmark",
  "Sweden Allsvenskan": "Sweden",
  "Norway Eliteserien": "Norway",
  "Mexico Liga de Expansion": "Mexico",
  "Egypt Premier League": "Egypt",
  "South Africa PSL": "South Africa",
  "Morocco Botola": "Morocco",
  "USA USL Championship": "USA",
  "Japan J2 League": "Japan",
  "South Korea K League 2": "South Korea",
  "Australia A-League": "Australia",
  "UAE Pro League": "UAE",
  "MLS Next Pro": "USA"
};

// --- Fixtures for the currently-selected DAY, fetched live from the API,
// one league at a time. A single day naturally won't show every team in a
// league — real fixtures are spread across the week — but the ‹ › arrows
// browse one literal calendar date at a time, showing only what's actually
// scheduled that day rather than a whole matchday's worth of fixtures.
let currentDate = new Date();
let currentFixtures = [];
let fixturesById = {};
let fixturesLoading = false;

// The shared free API key is flaky under bursts of parallel requests — the
// exact same call can fail once and succeed a moment later. Retry with a
// short backoff before giving up, and stagger the per-league dispatch below
// instead of firing all 14 requests in the same instant.
async function fetchJsonWithRetry(url, attempts = 3) {
  for (let i = 0; i < attempts; i++) {
    const res = await fetch(url);
    if (res.status === 429) {
      // The shared free key ("123") is used by everyone testing TheSportsDB
      // at once, so 429s are common under load — honor Retry-After (capped)
      // instead of hammering it again immediately, which only makes it worse.
      if (i === attempts - 1) throw new Error("HTTP 429");
      const retryAfterSec = Math.min(Number(res.headers.get("Retry-After")) || 3, 10);
      await new Promise(r => setTimeout(r, retryAfterSec * 1000));
      continue;
    }
    if (!res.ok) {
      if (i === attempts - 1) throw new Error("HTTP " + res.status);
      await new Promise(r => setTimeout(r, 400 + i * 500));
      continue;
    }
    return await res.json();
  }
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// Local calendar date, not UTC — toISOString() would give the wrong day for
// roughly half the day, for most of the world. At 00:52 local time in
// UTC+1 (e.g. Nigeria), toISOString() is still on "23:52 the previous day"
// in UTC, so it'd report yesterday's date as "today" — real users would see
// yesterday's fixtures/live-status until UTC catches up to their calendar.
function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateLabel(date) {
  const d = new Date(date);
  const today = new Date();
  const diffDays = Math.round((new Date(d).setHours(0, 0, 0, 0) - new Date(today).setHours(0, 0, 0, 0)) / 86400000);
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays === -1) return "Yesterday";
  return d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "short" });
}

// Flashscore-style: one exact calendar day at a time, browsed with the
// ‹ › arrows or jumped to directly via the LIVE button or date picker. An
// off-day genuinely showing no fixtures is expected, real behavior — not
// something to paper over with a wider window.
function windowDates(centerDate) {
  return [new Date(centerDate)];
}

// "Today" / "Yesterday" / "Tomorrow" / "26 Aug" — matches the date-bar label.
function dateBarLabel(centerDate) {
  const diffDays = Math.round((new Date(centerDate).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) / 86400000);
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays === -1) return "Yesterday";
  return formatApiDate(dateKey(centerDate));
}

// Which of GoalHub's leagues football-data.org also covers, and its code
// for each — used by mergeFootballDataFixtures() below to fill in real
// matches TheSportsDB's free tier is missing (confirmed firsthand: 4 of 7
// real Premier League fixtures were absent from TheSportsDB on 2026-09-05).
const FOOTBALL_DATA_LEAGUES = {
  "Premier League": "PL",
  "La Liga": "PD",
  "Serie A": "SA",
  "Ligue 1": "FL1",
  "Bundesliga": "BL1",
  "Eredivisie": "DED",
  "Primeira Liga": "PPL",
  "Brasileirao": "BSA"
};

const FD_STATUS_TO_SPORTSDB_STATUS = {
  SCHEDULED: "NS",
  TIMED: "NS",
  IN_PLAY: "LIVE",
  PAUSED: "HT",
  FINISHED: "FT",
  POSTPONED: "PST",
  SUSPENDED: "CANC",
  CANCELLED: "CANC"
};

// Strips club suffixes ("FC"/"AFC"/"CF") and punctuation so the same team
// spelled differently across TheSportsDB and football-data.org ("Brentford"
// vs "Brentford FC") still matches when checking for duplicates.
function normalizeTeamNameForMatch(name) {
  return name.toLowerCase().replace(/\b(fc|afc|cf)\b/g, "").replace(/[^a-z0-9]/g, "");
}

// football-data.org names carry a trailing "FC"/"AFC"/"CF" that TheSportsDB's
// names don't ("Brentford FC" vs "Brentford") — trimmed only from the end,
// so a name that's legitimately just "AFC Bournemouth" (prefix) is untouched.
function cleanFootballDataTeamName(name) {
  return name.replace(/\s+(FC|AFC|CF)$/i, "").trim();
}

// Adds any real match football-data.org has for its covered leagues that
// TheSportsDB's response for that day doesn't — never overrides or
// duplicates a fixture TheSportsDB already has, and a failure here is
// silently skipped (a missed supplement, not a broken page) since this is
// strictly additive on top of the main TheSportsDB-sourced list.
async function mergeFootballDataFixtures(centerDate, fixtures) {
  const key = dateKey(centerDate);
  const byLeague = {};
  fixtures.forEach(f => { (byLeague[f.league] = byLeague[f.league] || []).push(f); });

  const additions = [];
  for (const [league, code] of Object.entries(FOOTBALL_DATA_LEAGUES)) {
    if (!(league in LEAGUE_IDS)) continue; // not currently one of GoalHub's tracked leagues
    try {
      const res = await fetch(`${CHAT_WORKER_BASE}/fd-fixtures?competition=${code}&date=${key}`);
      if (res.ok) {
        const data = await res.json();
        const existing = byLeague[league] || [];
        (data.matches || []).forEach(m => {
          const homeKey = normalizeTeamNameForMatch(m.home.name);
          const awayKey = normalizeTeamNameForMatch(m.away.name);
          const alreadyHave = existing.some(f =>
            normalizeTeamNameForMatch(f.home.name) === homeKey && normalizeTeamNameForMatch(f.away.name) === awayKey
          );
          if (alreadyHave) return;
          const homeName = cleanFootballDataTeamName(m.home.name);
          const awayName = cleanFootballDataTeamName(m.away.name);
          additions.push({
            id: `fd-${m.id}`,
            apiFootballId: null,
            league,
            time: m.utcDate ? new Date(m.utcDate).toTimeString().slice(0, 5) : "",
            date: key,
            status: FD_STATUS_TO_SPORTSDB_STATUS[m.status] || "NS",
            venue: null,
            venueId: null,
            round: null,
            homeScore: m.homeScore,
            awayScore: m.awayScore,
            // No TheSportsDB team id available from this source — left as
            // "" (NOT undefined: clickableTeam()/openMatchModal() interpolate
            // this straight into an onclick string, where undefined would
            // become the truthy literal string "undefined" and break the
            // fallback below), same as any team clicked from the footer/
            // search, which already resolves a real id on click via
            // resolveTeamId().
            home: { id: "", name: homeName, logo: resolveLogo(m.home.crest, homeName), league },
            away: { id: "", name: awayName, logo: resolveLogo(m.away.crest, awayName), league }
          });
        });
      }
    } catch (err) { /* best-effort supplement only */ }
    await sleep(100);
  }
  return fixtures.concat(additions);
}

async function fetchFixturesForWindow(centerDate) {
  const dateKeys = windowDates(centerDate).map(dateKey);
  const entries = Object.entries(LEAGUE_IDS);
  const fixturesByLeague = [];
  let anyRequestSucceeded = false;
  for (let i = 0; i < entries.length; i++) {
    const [league, id] = entries[i];
    for (let j = 0; j < dateKeys.length; j++) {
      try {
        const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/eventsday.php?d=${dateKeys[j]}&l=${id}`);
        anyRequestSucceeded = true;
        fixturesByLeague.push((data.events || []).map(e => ({
          id: e.idEvent,
          apiFootballId: e.idAPIfootball || null, // links this event to the real-minute data in liveFixturesById — see matchStatusDisplay()
          league,
          time: (e.strTimeLocal || e.strTime || "").slice(0, 5),
          date: e.dateEventLocal || e.dateEvent,
          status: e.strStatus,
          venue: e.strVenue,
          venueId: e.idVenue,
          round: e.intRound,
          homeScore: e.intHomeScore !== null ? Number(e.intHomeScore) : null,
          awayScore: e.intAwayScore !== null ? Number(e.intAwayScore) : null,
          home: { id: e.idHomeTeam, name: e.strHomeTeam, logo: resolveLogo(e.strHomeTeamBadge, e.strHomeTeam), league },
          away: { id: e.idAwayTeam, name: e.strAwayTeam, logo: resolveLogo(e.strAwayTeamBadge, e.strAwayTeam), league }
        })));
      } catch (err) {
        fixturesByLeague.push([]);
      }
      await sleep(100);
    }
  }
  const merged = await mergeFootballDataFixtures(centerDate, fixturesByLeague.flat());
  return { fixtures: merged, ok: anyRequestSucceeded };
}

// --- Offline/outage fallback cache: the last successfully-fetched fixture
// list for each date, kept in localStorage so a total API outage (or a
// dropped connection on a slow/mobile network) shows real, previously-seen
// results with an honest "cached" label instead of an empty dead end. Never
// used to invent data — only ever replays what actually loaded before.
const FIXTURES_CACHE_PREFIX = "goalhub_cache_fixtures_";

function cacheFixtures(key, fixtures) {
  try {
    localStorage.setItem(FIXTURES_CACHE_PREFIX + key, JSON.stringify({ fixtures, cachedAt: Date.now() }));
  } catch (err) { /* storage full/unavailable — caching is best-effort only */ }
}

function getCachedFixtures(key) {
  try {
    const raw = localStorage.getItem(FIXTURES_CACHE_PREFIX + key);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

// Set to the cache timestamp while currentFixtures is standing in for a
// failed live fetch (see loadFixturesAndRender), so loadMatches() can show
// an honest "showing cached results" banner; null once a fetch succeeds.
let fixturesStaleAt = null;

async function loadFixturesAndRender() {
  fixturesLoading = true;
  matchesDiv.innerHTML = skeletonRows(6);
  document.getElementById("featured").innerHTML = skeletonBlock();
  document.querySelector(".date-label").textContent = dateBarLabel(currentDate);
  document.getElementById("calendarDayNum").textContent = currentDate.getDate();
  document.getElementById("datePickerInput").value = dateKey(currentDate);

  const cacheKey = dateKey(currentDate);
  const result = await fetchFixturesForWindow(currentDate);
  fixturesLoading = false;

  if (!result.ok) {
    const cached = getCachedFixtures(cacheKey);
    if (cached) {
      currentFixtures = cached.fixtures;
      fixturesById = Object.fromEntries(currentFixtures.map(f => [f.id, f]));
      fixturesStaleAt = cached.cachedAt;
      currentFixtures = cached.fixtures;
      fixturesById = Object.fromEntries(currentFixtures.map(f => [f.id, f]));
      loadMatches();
      renderFeaturedMatch();
      return;
    }
    currentFixtures = [];
    fixturesById = {};
    matchesDiv.innerHTML = `<div class="no-results">Couldn't reach the live football API right now (it can be flaky under load). <span class="retry-link" onclick="loadFixturesAndRender()">Tap to retry</span>.</div>`;
    document.getElementById("featured").innerHTML = `<div class="team-no-fixture">Unavailable — retry above.</div>`;
    return;
  }

  fixturesStaleAt = null;
  currentFixtures = result.fixtures;
  fixturesById = Object.fromEntries(currentFixtures.map(f => [f.id, f]));
  cacheFixtures(cacheKey, currentFixtures);
  loadMatches();
  renderFeaturedMatch();
}

// --- Live Now (hero grid) — always the real live fixtures already loaded
// for today, never mock data. An honest empty state when nothing's live
// right now, rather than padding the grid with anything fake.
const AF_IN_PROGRESS_STATUSES = new Set(["1H", "2H", "HT", "ET", "BT", "P", "LIVE"]);
let liveFixturesById = {};

function afMinuteLabel(f) {
  if (f.statusShort === "HT") return "HT";
  if (f.statusShort === "FT") return "FT";
  if (f.statusShort === "NS") return "Not started";
  return f.minute != null ? `${f.minute}'` : f.statusShort;
}

// Homepage "Live Now" — real fixtures from API-Football (via the Worker's
// /live-fixtures route), independent of the date bar since "live" always
// means right now regardless of which day is selected below.
// Live scores go stale fast, so — unlike the day's fixture list — a cached
// replay is only trusted for a couple of minutes; past that a live score
// shown as current would be actively misleading, so it falls through to
// the honest "couldn't load" message instead.
const LIVE_CACHE_KEY = "goalhub_cache_live_fixtures";
const LIVE_CACHE_MAX_AGE_MS = 2 * 60 * 1000;

function cacheLiveFixtures(fixtures) {
  try {
    localStorage.setItem(LIVE_CACHE_KEY, JSON.stringify({ fixtures, cachedAt: Date.now() }));
  } catch (err) { /* best-effort only */ }
}

function getFreshCachedLiveFixtures() {
  try {
    const raw = localStorage.getItem(LIVE_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.cachedAt > LIVE_CACHE_MAX_AGE_MS) return null;
    return parsed;
  } catch (err) {
    return null;
  }
}

// Maps API-Football's live status codes onto TheSportsDB's vocabulary
// (used for f.status everywhere else on the site).
const AF_STATUS_TO_SPORTSDB_STATUS = { "1H": "1H", "2H": "2H", "HT": "HT", "ET": "ET", "BT": "HT", "P": "HT", "LIVE": "1H", "FT": "FT" };

// TheSportsDB's free-tier status/score can sit stale well after a match has
// actually kicked off — seen firsthand showing "NS" (not started), no
// score, for a match that was 44 minutes in with a real 0-1 scoreline per
// API-Football. Since a mismatch here means "not started" is simply wrong,
// not just imprecise, this overrides the status AND score from the live
// source whenever the two disagree — not just the display-only minute
// label — so a genuinely live match doesn't sit looking like it hasn't
// kicked off yet, and the "Live" filter / auto-refresh (which key off
// f.status) pick it up correctly too.
function reconcileLiveStatuses() {
  let changed = false;
  currentFixtures.forEach(f => {
    if (!f.apiFootballId) return;
    const live = liveFixturesById[f.apiFootballId];
    if (!live) return;
    const mappedStatus = AF_STATUS_TO_SPORTSDB_STATUS[live.statusShort];
    if (!mappedStatus) return;
    if (f.status !== mappedStatus || f.homeScore !== live.home.score || f.awayScore !== live.away.score) {
      f.status = mappedStatus;
      f.homeScore = live.home.score;
      f.awayScore = live.away.score;
      changed = true;
    }
  });
  return changed;
}

// Called whenever liveFixturesById is refreshed, so a real live minute (and
// now, a real status/score correction — see reconcileLiveStatuses) that
// just became available shows up in the already-rendered "All Matches"
// list without waiting for its own separate 60s cycle or a user action.
function refreshLiveMinutesInMatchList() {
  reconcileLiveStatuses();
  if (viewMode === "matches" && !fixturesLoading) loadMatches();
}

async function renderLiveNowSection() {
  const grid = document.getElementById("liveNowGrid");
  let fixtures;
  let stale = null;
  try {
    const res = await fetch(`${CHAT_WORKER_BASE}/live-fixtures`);
    if (!res.ok) throw new Error("bad response");
    const data = await res.json();
    fixtures = data.fixtures || [];
    cacheLiveFixtures(fixtures);
  } catch (err) {
    const cached = getFreshCachedLiveFixtures();
    if (!cached) {
      grid.innerHTML = `<div class="live-now-empty">Couldn't load live matches right now. <span class="retry-link" onclick="renderLiveNowSection()">Tap to retry</span>.</div>`;
      return;
    }
    fixtures = cached.fixtures;
    stale = cached.cachedAt;
    // Cached live data is only ever shown for up to LIVE_CACHE_MAX_AGE_MS,
    // so retry sooner than the normal 60s poll to get back to real-time.
    setTimeout(renderLiveNowSection, 8000);
  }

  const live = fixtures.filter(f => AF_IN_PROGRESS_STATUSES.has(f.statusShort));

  if (live.length === 0) {
    // Clear rather than leave stale — otherwise a match that just ended
    // would keep cross-referencing to its last-known (now wrong) minute in
    // the "All Matches" list (see matchStatusDisplay) indefinitely.
    liveFixturesById = {};
    grid.innerHTML = `<div class="live-now-empty">No live matches right now. Check back during a matchday, or browse today's fixtures below.</div>`;
    refreshLiveMinutesInMatchList();
    return;
  }

  liveFixturesById = Object.fromEntries(live.map(f => [f.id, f]));
  refreshLiveMinutesInMatchList();

  const staleBanner = stale
    ? `<div class="cache-banner live-now-stale-banner">Reconnecting — showing scores from ${Math.max(1, Math.round((Date.now() - stale) / 1000))}s ago.</div>`
    : "";

  grid.innerHTML = staleBanner + live.map(f => {
    const watching = notifyMeFixtures.has(f.id);
    return `
    <div class="live-game-card hover-glow" onclick="openLiveMatchModal('${f.id}')">
      <div class="live-game-league">${badgeImg(f.leagueLogo, f.league, "")}<span>${f.league}</span><span class="live-badge">LIVE</span></div>
      <div class="live-game-row">
        <div class="live-game-team">${badgeImg(f.home.logo, f.home.name, "")}<span>${f.home.name}</span></div>
        <div class="live-game-score">${f.home.score ?? 0}</div>
      </div>
      <div class="live-game-row">
        <div class="live-game-team">${badgeImg(f.away.logo, f.away.name, "")}<span>${f.away.name}</span></div>
        <div class="live-game-score">${f.away.score ?? 0}</div>
      </div>
      <div class="live-game-footer">
        <span class="live-game-minute">${afMinuteLabel(f)}</span>
        <span class="notify-bell${watching ? " watching" : ""}" onclick="event.stopPropagation(); toggleNotifyMe('${f.id}')" title="Notify me on goals (while this tab is open)">${watching ? "🔔" : "🔕"}</span>
      </div>
    </div>`;
  }).join("");

  scheduleGoalWatch();
}

// --- Goal notifications, real but scoped honestly: this uses the browser
// Notification API with a client-side polling loop, so it only fires while
// this GoalHub tab stays open — NOT true push (which would keep working
// with the site closed, and needs a service worker + VAPID keys + a
// server-side cron job watching scores, a much bigger separate build).
const notifyMeFixtures = new Set();
let goalWatchInterval = null;

async function toggleNotifyMe(fixtureId) {
  if (!notifyMeFixtures.has(fixtureId)) {
    if (typeof Notification === "undefined") {
      alert("This browser doesn't support notifications.");
      return;
    }
    if (Notification.permission === "default") {
      const perm = await Notification.requestPermission();
      if (perm !== "granted") return;
    }
    if (Notification.permission !== "granted") return;
    notifyMeFixtures.add(fixtureId);
    if (currentUser) {
      fetch(`${CHAT_WORKER_BASE}/api/user/notify-prefs`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getAuthToken()}` },
        body: JSON.stringify({ fixture_id: fixtureId })
      }).catch(() => {}); // best-effort sync — the in-tab watch still works locally either way
    }
  } else {
    notifyMeFixtures.delete(fixtureId);
    if (currentUser) {
      fetch(`${CHAT_WORKER_BASE}/api/user/notify-prefs/${fixtureId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${getAuthToken()}` }
      }).catch(() => {});
    }
  }
  renderLiveNowSection();
}

async function fetchNotifyPrefs() {
  if (!currentUser) return;
  try {
    const res = await fetch(`${CHAT_WORKER_BASE}/api/user/notify-prefs`, { headers: { Authorization: `Bearer ${getAuthToken()}` } });
    if (!res.ok) return;
    const data = await res.json();
    (data.fixtureIds || []).forEach(id => notifyMeFixtures.add(id));
  } catch (err) { /* non-critical — bells just won't be pre-checked this load */ }
}

function scheduleGoalWatch() {
  if (goalWatchInterval) return; // already running
  goalWatchInterval = setInterval(async () => {
    if (notifyMeFixtures.size === 0) return;
    try {
      const res = await fetch(`${CHAT_WORKER_BASE}/live-fixtures`);
      if (!res.ok) return;
      const data = await res.json();
      (data.fixtures || []).forEach(f => {
        if (!notifyMeFixtures.has(f.id)) return;
        const prev = liveFixturesById[f.id];
        if (!prev) return;
        if (f.home.score !== prev.home.score || f.away.score !== prev.away.score) {
          const scorer = f.home.score !== prev.home.score ? f.home.name : f.away.name;
          new Notification("GOAL!", { body: `${scorer} — ${f.home.name} ${f.home.score}-${f.away.score} ${f.away.name} ${afMinuteLabel(f)}` });
        }
        if (!AF_IN_PROGRESS_STATUSES.has(f.statusShort)) notifyMeFixtures.delete(f.id); // match ended
      });
      liveFixturesById = Object.fromEntries((data.fixtures || []).map(f => [f.id, f]));
    } catch (err) { /* transient — try again next tick */ }
  }, 45000);
}

// --- Live Now match detail modal. Separate from the main match modal
// because these fixtures come from API-Football (Live Now widget), not
// TheSportsDB (GoalHub's main fixture pipeline) — different id namespace,
// different data shape. Timeline/Stats/Lineups are real, verified data;
// Table only shows when the match is in one of GoalHub's tracked leagues
// (most Live Now matches are from smaller competitions we don't track
// standings for, and that's shown honestly rather than guessed at).
let currentLiveFixture = null;
const liveFixtureDetailsCache = {};

function openLiveMatchModal(fixtureId) {
  const f = liveFixturesById[fixtureId];
  if (!f) return;
  currentLiveFixture = f;

  document.getElementById("liveMatchModalContent").innerHTML = `
    <div class="match-modal-league">${badgeImg(f.leagueLogo, f.league, "")}<span>${f.league}</span></div>
    <div class="match-modal-teams">
      <div class="match-modal-team">${badgeImg(f.home.logo, f.home.name, "")}<span>${f.home.name}</span></div>
      <div class="match-modal-center">
        <div class="match-modal-time">${f.home.score ?? 0} - ${f.away.score ?? 0}</div>
        <div class="match-modal-sub">${afMinuteLabel(f)}</div>
      </div>
      <div class="match-modal-team">${badgeImg(f.away.logo, f.away.name, "")}<span>${f.away.name}</span></div>
    </div>
    <div class="match-modal-tabs">
      <button class="match-tab-btn active" data-live-tab="timeline" onclick="showLiveMatchTab('timeline')">Timeline</button>
      <button class="match-tab-btn" data-live-tab="stats" onclick="showLiveMatchTab('stats')">Stats</button>
      <button class="match-tab-btn" data-live-tab="lineups" onclick="showLiveMatchTab('lineups')">Lineups</button>
      <button class="match-tab-btn" data-live-tab="table" onclick="showLiveMatchTab('table')">Table</button>
    </div>
    <div class="match-modal-tab-body" id="liveMatchTabBody"></div>`;
  document.getElementById("liveMatchModal").classList.add("open");
  showLiveMatchTab("timeline");
  pushModalUrl("livematch", fixtureId);
}

function closeLiveMatchModal() {
  document.getElementById("liveMatchModal").classList.remove("open");
  currentLiveFixture = null;
  clearModalUrl();
}

async function fetchLiveFixtureDetails(fixtureId) {
  if (liveFixtureDetailsCache[fixtureId]) return liveFixtureDetailsCache[fixtureId];
  const res = await fetch(`${CHAT_WORKER_BASE}/fixture-details?id=${fixtureId}`);
  if (!res.ok) throw new Error("bad response");
  const data = await res.json();
  liveFixtureDetailsCache[fixtureId] = data;
  return data;
}

async function showLiveMatchTab(tab) {
  const f = currentLiveFixture;
  if (!f) return;
  document.querySelectorAll("[data-live-tab]").forEach(b => b.classList.toggle("active", b.dataset.liveTab === tab));
  const body = document.getElementById("liveMatchTabBody");
  body.innerHTML = skeletonRows(3);

  try {
    if (tab === "table") {
      const html = f.goalhubLeagueName
        ? await fetchLeagueTableHtml(f.goalhubLeagueName, dateKey(new Date()), [f.home.name, f.away.name])
        : `<div class="team-no-fixture">Standings aren't tracked for this competition (${f.league}) on GoalHub.</div>`;
      if (currentLiveFixture === f) body.innerHTML = html;
      return;
    }

    const details = await fetchLiveFixtureDetails(f.id);
    if (currentLiveFixture !== f) return; // user closed/switched while this was in flight

    if (tab === "timeline") body.innerHTML = renderLiveTimelineTab(details);
    else if (tab === "stats") body.innerHTML = renderLiveStatsTab(details, f);
    else if (tab === "lineups") body.innerHTML = renderLiveLineupsTab(details);
  } catch (err) {
    if (currentLiveFixture === f) {
      body.innerHTML = `<div class="no-results">Couldn't load this right now (the free API can be flaky under load). <span class="retry-link" onclick="showLiveMatchTab('${tab}')">Tap to retry</span>.</div>`;
    }
  }
}

const EVENT_ICONS = { Goal: "⚽", Card: "🟨", subst: "🔁" };

function renderLiveTimelineTab(details) {
  const events = details.events || [];
  if (events.length === 0) return `<div class="team-no-fixture">No timeline events yet.</div>`;
  return `<div class="timeline-list">${events.map(e => `
    <div class="timeline-row">
      <span class="timeline-minute">${e.minute}${e.extra ? `+${e.extra}` : ""}'</span>
      <span class="timeline-icon">${EVENT_ICONS[e.type] || "•"}</span>
      <span class="timeline-detail"><strong>${e.player || e.detail}</strong> — ${e.detail}${e.assist ? ` (assist: ${e.assist})` : ""}<br><span class="timeline-team">${e.team || ""}</span></span>
    </div>`).join("")}</div>`;
}

function renderLiveStatsTab(details, f) {
  const stats = details.statistics || [];
  if (stats.length < 2) return `<div class="team-no-fixture">Stats aren't published for this match yet.</div>`;
  const [home, away] = stats;
  const byType = {};
  home.stats.forEach(s => { byType[s.type] = byType[s.type] || {}; byType[s.type].home = s.value; });
  away.stats.forEach(s => { byType[s.type] = byType[s.type] || {}; byType[s.type].away = s.value; });

  const rows = Object.entries(byType).map(([type, v]) => {
    const homeNum = parseFloat(v.home) || 0;
    const awayNum = parseFloat(v.away) || 0;
    const total = homeNum + awayNum || 1;
    const homePct = Math.round((homeNum / total) * 100);
    return `
      <div class="stat-row">
        <div class="stat-values">
          <span class="stat-value">${v.home ?? "—"}</span>
          <span class="stat-label">${type}</span>
          <span class="stat-value">${v.away ?? "—"}</span>
        </div>
        <div class="stat-bar-track">
          <div class="stat-bar-home" style="width:${homePct}%"></div>
          <div class="stat-bar-away" style="width:${100 - homePct}%"></div>
        </div>
      </div>`;
  }).join("");
  return `<div class="stats-list">${rows}</div>`;
}

function renderLiveLineupsTab(details) {
  const lineups = details.lineups || [];
  if (lineups.length < 2) return `<div class="team-no-fixture">Lineups aren't published for this match yet.</div>`;
  const renderSide = t => `
    <div class="lineup-side">
      <div class="lineup-side-title">${t.team}${t.formation ? ` · ${t.formation}` : ""}</div>
      ${t.startXI.map(p => `
        <div class="lineup-player">
          <span class="lineup-number">${p.number ?? ""}</span>
          <span class="lineup-name">${p.name}</span>
          <span class="lineup-position">${p.pos || ""}</span>
        </div>`).join("")}
    </div>`;
  return `<div class="lineup-grid">${lineups.map(renderSide).join("")}</div>`;
}

// --- Top Leagues strip — a curated set of leagues we actually have real
// badge art and fixture data for (not a wishlist of competitions like
// Champions League that aren't in GoalHub's tracked league list). African
// leagues lead the row rather than being buried in the sidebar's full
// A-Z list — GoalHub's real audience is Nigeria/West Africa first.
const TOP_LEAGUES = ["Nigeria NPFL", "Egypt Premier League", "Morocco Botola", "South Africa PSL", "Premier League", "La Liga", "Serie A", "Bundesliga", "Ligue 1", "Brasileirao", "MLS"];

function jumpToLeague(league) {
  setViewMode("matches");
  filterLeague(league, null);
  document.querySelector(".main-layout").scrollIntoView({ behavior: "smooth" });
}

function renderTopLeaguesSection() {
  const scroll = document.getElementById("topLeaguesScroll");
  scroll.innerHTML = TOP_LEAGUES.map(league => `
    <div class="top-league-card hover-glow" onclick="jumpToLeague('${league}')">
      ${badgeImg(leagueLogos[league], league, "")}
      <span>${league}</span>
    </div>`).join("");
}
renderTopLeaguesSection();

// Central entry point for any date change — arrows, the date picker, and
// LIVE all funnel through here so the fetch/render/label logic lives in
// exactly one place.
function loadMatchesForDate(date) {
  currentDate = new Date(date);
  loadFixturesAndRender();
}

function changeDate(delta) {
  const d = new Date(currentDate);
  d.setDate(d.getDate() + delta);
  loadMatchesForDate(d);
}

function jumpToLive() {
  statusFilter = "live";
  loadMatchesForDate(new Date());
}

let statusFilter = "all";

function setStatusFilter(filter) {
  statusFilter = filter;
  loadMatches();
}

function renderMatchRow(f) {
  const status = matchStatusDisplay(f);
  const favorited = isFavorited(f.id);
  return `
    <div class="match-row" onclick="openMatchModal('${f.id}')">
      <div class="match-status">${status.primary}${status.tag ? `<span class="match-tag">${status.tag}</span>` : ""}</div>
      <div class="match-teams">
        ${clickableTeam(f.home)}
        ${clickableTeam(f.away)}
      </div>
      <div class="match-row-actions">
        <span class="share-btn" onclick="event.stopPropagation(); shareMatch(this, '${f.id}', '${f.home.name.replace(/'/g, "")}', '${f.away.name.replace(/'/g, "")}')" aria-label="Share match">🔗</span>
        <div class="fav-star${favorited ? " favorited" : ""}" onclick="event.stopPropagation(); toggleFavorite('${f.id}')">${favorited ? "★" : "☆"}</div>
      </div>
    </div>`;
}

// Native share sheet where available (mobile browsers, some desktop
// browsers); falls back to copying a shareable line to the clipboard
// everywhere else, with a brief visual confirmation either way.
async function shareMatch(el, matchId, homeName, awayName) {
  const url = `${window.location.origin}${window.location.pathname}?match=${matchId}`;
  const text = `Watch ${homeName} vs ${awayName} on GoalHub`;

  if (navigator.share) {
    try {
      await navigator.share({ title: "GoalHub", text, url });
    } catch (err) { /* user cancelled the share sheet — not an error */ }
    return;
  }

  try {
    await navigator.clipboard.writeText(`${text} — ${url}`);
    flashShareFeedback(el, "✓");
  } catch (err) {
    flashShareFeedback(el, "✕");
  }
}

function flashShareFeedback(el, symbol) {
  const original = el.textContent;
  el.textContent = symbol;
  setTimeout(() => { el.textContent = original; }, 1500);
}

// null = auto (apply the favorites filter whenever the user has any
// favorite teams); true/false = the user explicitly toggled it via the
// banner link below, overriding the auto behavior for this session.
let showOnlyFavoritesOverride = null;

function toggleFavoritesFilter() {
  showOnlyFavoritesOverride = showOnlyFavoritesOverride === false ? null : false;
  loadMatches();
}

function loadMatches() {
  document.getElementById("liveBtn").classList.toggle("active", statusFilter === "live");
  let fixturesToUse = activeLeague === "All" ? currentFixtures : currentFixtures.filter(f => f.league === activeLeague);

  if (searchTerm !== "") {
    const term = searchTerm.toLowerCase();
    fixturesToUse = fixturesToUse.filter(f => f.home.name.toLowerCase().includes(term) || f.away.name.toLowerCase().includes(term));
  }

  const favoriteTeamNames = currentUser && serverFavoritesByName ? new Set(serverFavoritesByName.keys()) : getLocalFavoriteTeamNames();
  const hasFavoriteTeams = favoriteTeamNames.size > 0;
  const applyFavoritesFilter = hasFavoriteTeams && showOnlyFavoritesOverride !== false;
  let favoritesBanner = "";
  if (hasFavoriteTeams) {
    favoritesBanner = applyFavoritesFilter
      ? `<div class="favorites-filter-banner">Showing only your favorite teams. <span class="retry-link" onclick="toggleFavoritesFilter()">View all matches</span></div>`
      : `<div class="favorites-filter-banner"><span class="retry-link" onclick="toggleFavoritesFilter()">Show only my favorite teams</span></div>`;
  }
  if (applyFavoritesFilter) {
    fixturesToUse = fixturesToUse.filter(f => favoriteTeamNames.has(f.home.name) || favoriteTeamNames.has(f.away.name));
  }

  const liveCount = fixturesToUse.filter(f => isLiveStatus(f.status)).length;

  const staleBanner = fixturesStaleAt
    ? (() => {
        const mins = Math.max(0, Math.round((Date.now() - fixturesStaleAt) / 60000));
        return `<div class="cache-banner">Showing results from ${mins === 0 ? "just now" : mins + " min ago"} — live API unavailable right now. <span class="retry-link" onclick="loadFixturesAndRender()">Tap to retry</span>.</div>`;
      })()
    : "";

  const filterBar = staleBanner + favoritesBanner + `
    <div class="status-filter-bar">
      <button class="status-filter-btn${statusFilter === "all" ? " active" : ""}" onclick="setStatusFilter('all')">All</button>
      <button class="status-filter-btn status-filter-live${statusFilter === "live" ? " active" : ""}" onclick="setStatusFilter('live')"><span class="live-dot"></span>Live${liveCount ? ` (${liveCount})` : ""}</button>
      <button class="status-filter-btn${statusFilter === "finished" ? " active" : ""}" onclick="setStatusFilter('finished')">Finished</button>
      <button class="status-filter-btn${statusFilter === "upcoming" ? " active" : ""}" onclick="setStatusFilter('upcoming')">Upcoming</button>
    </div>`;

  if (statusFilter === "live") fixturesToUse = fixturesToUse.filter(f => isLiveStatus(f.status));
  else if (statusFilter === "finished") fixturesToUse = fixturesToUse.filter(f => isFinishedStatus(f.status));
  else if (statusFilter === "upcoming") fixturesToUse = fixturesToUse.filter(f => f.status === "NS" || !f.status);

  if (fixturesToUse.length === 0) {
    // The Live filter is scoped to GoalHub's ~40 tracked leagues for the
    // selected day — genuinely different from the Live Now widget above,
    // which shows live matches from anywhere. Spelling that out here (with
    // a way to jump there) avoids it reading as a bug when the two disagree.
    if (statusFilter === "live" && searchTerm === "" && activeLeague === "All") {
      matchesDiv.innerHTML = filterBar + `<div class="no-results">No live matches in Top 40 Leagues right now. Check "Live Now" for all games.<br><span class="retry-link" onclick="document.getElementById('liveNowSection').scrollIntoView({behavior:'smooth'})">View All Live Games</span></div>`;
      return;
    }

    const label = document.querySelector(".date-label").textContent;
    // We can't always tell "genuinely no games that day" apart from "the
    // free API had a silent hiccup and returned nothing" — so when there's
    // no search/status filter involved, offer an easy retry rather than
    // just asserting there's nothing to see.
    const retryHint = searchTerm || statusFilter !== "all"
      ? ""
      : ` If that seems wrong, <span class="retry-link" onclick="loadFixturesAndRender()">tap to retry</span> — the free API can occasionally miss a request.`;
    // Naming the active league makes it clear this is a real gap in that
    // competition's schedule (leagues don't play every day) rather than a
    // broken app — without it, an empty result reads as a bug.
    const scopeLabel = activeLeague !== "All" ? activeLeague : "real";
    matchesDiv.innerHTML = filterBar + `<div class="no-results">No ${scopeLabel} fixtures for ${label}${searchTerm ? " matching your search" : statusFilter !== "all" ? ` in "${statusFilter}"` : ""}. Try another ${statusFilter !== "all" ? "filter" : "day"}.${retryHint}</div>`;
    return;
  }

  const leaguesToShow = [...new Set(fixturesToUse.map(f => f.league))];
  let bodyHtml = "";

  const favoriteFixtures = fixturesToUse.filter(f => isFavorited(f.id));
  if (favoriteFixtures.length > 0) {
    bodyHtml += `<div class="league-group">
      <div class="league-title">
        <span class="league-title-text"><span class="league-name">★ Favorites</span></span>
      </div>
      ${favoriteFixtures.map(renderMatchRow).join("")}
    </div>`;
  }

  leaguesToShow.forEach(league => {
    const leagueFixtures = fixturesToUse
      .filter(f => f.league === league)
      .slice()
      .sort((a, b) => (a.time || "").localeCompare(b.time || ""));

    let html = `<div class="league-group">
      <div class="league-title">
        ${badgeImg(leagueLogos[league], league, "")}
        <div class="league-title-text">
          <span class="league-name">${league}</span>
          <span class="league-country">${LEAGUE_COUNTRY[league] || ""}</span>
        </div>
        <span class="league-table-link" onclick="event.stopPropagation(); openLeagueTableModal('${league.replace(/'/g, "")}')">Table ›</span>
      </div>`;

    html += leagueFixtures.map(renderMatchRow).join("");
    html += `</div>`;
    bodyHtml += html;
  });

  matchesDiv.innerHTML = filterBar + bodyHtml;
}

function searchTeams() {
  searchTerm = document.getElementById("searchInput").value;
  if (viewMode === "teams") renderAllTeams();
  else loadMatches();
}

function filterLeague(league, el) {
  activeLeague = league;
  document.querySelectorAll(".comp-item").forEach(i => i.classList.remove("active"));
  if (el) el.classList.add("active");
  if (viewMode === "teams") renderAllTeams();
  else loadMatches();
}

// --- All Matches / All Teams / Favorites toggle. "All Teams" browses the
// full roster (every team we know about, regardless of whether it has a
// fixture in the currently-loaded date) rather than derailing into the
// day's fixture data. "Favorites" is the same team-card view, just
// pre-filtered to a separate starred list persisted in localStorage.
let viewMode = "matches";

const FAVORITE_TEAMS_KEY = "goalhub_favorite_teams";

function getLocalFavoriteTeamNames() {
  try {
    return new Set(JSON.parse(localStorage.getItem(FAVORITE_TEAMS_KEY) || "[]"));
  } catch (err) {
    return new Set();
  }
}

// Signed-in favorites live server-side (favorites_teams in D1 — synced
// across devices); signed-out favorites stay local-only, same as before.
// This map (team_name -> favorites_teams row id) is the in-memory cache of
// the server list, refreshed on login/logout so isTeamFavorited stays sync.
let serverFavoritesByName = null; // null = not logged in / not yet fetched

async function fetchServerFavorites() {
  if (!currentUser) {
    serverFavoritesByName = null;
    return;
  }
  const token = getAuthToken();
  const res = await fetch(`${CHAT_WORKER_BASE}/api/user/favorites`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) {
    serverFavoritesByName = new Map();
    return;
  }
  const data = await res.json();
  serverFavoritesByName = new Map(data.favorites.map(f => [f.team_name, f.id]));
}

function isTeamFavorited(name) {
  if (currentUser && serverFavoritesByName) return serverFavoritesByName.has(name);
  return getLocalFavoriteTeamNames().has(name);
}

// --- Score predictions. fixture_id -> {predicted_home, predicted_away,
// points, resolved}, fetched once per session (same pattern as favorites).
let myPredictionsByFixture = null;

async function fetchMyPredictions() {
  if (!currentUser) { myPredictionsByFixture = null; return; }
  const token = getAuthToken();
  const res = await fetch(`${CHAT_WORKER_BASE}/api/predictions/mine`, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) { myPredictionsByFixture = new Map(); return; }
  const data = await res.json();
  myPredictionsByFixture = new Map(data.predictions.map(p => [p.fixture_id, p]));
}

function renderPredictTab(fixture) {
  const body = document.getElementById("matchTabBody");

  if (!currentUser) {
    body.innerHTML = `<div class="team-no-fixture">Log in to predict this match's score.</div>`;
    return;
  }

  const existing = myPredictionsByFixture && myPredictionsByFixture.get(String(fixture.id));
  if (existing) {
    body.innerHTML = `
      <div class="predict-result">
        <div class="predict-result-label">You predicted</div>
        <div class="predict-result-score">${fixture.home.name} ${existing.predicted_home} - ${existing.predicted_away} ${fixture.away.name}</div>
        ${existing.resolved
          ? `<div class="predict-result-points">${existing.points} point${existing.points === 1 ? "" : "s"} awarded</div>`
          : `<div class="predict-result-pending">Points awarded once the match finishes</div>`}
      </div>`;
    return;
  }

  body.innerHTML = `
    <div class="predict-form">
      <div class="predict-form-teams">
        <span>${fixture.home.name}</span>
        <input type="number" id="predictHomeScore" class="predict-score-input" min="0" max="30" value="0">
        <span class="predict-vs">-</span>
        <input type="number" id="predictAwayScore" class="predict-score-input" min="0" max="30" value="0">
        <span>${fixture.away.name}</span>
      </div>
      <button class="auth-submit-btn" onclick="submitScorePrediction('${fixture.id}')">Submit Prediction</button>
      <div id="predictStatusMsg" class="auth-status-msg"></div>
    </div>`;
}

async function submitScorePrediction(fixtureId) {
  const fixture = currentMatchFixture;
  if (!fixture || String(fixture.id) !== String(fixtureId)) return;
  const predictedHome = Number(document.getElementById("predictHomeScore").value);
  const predictedAway = Number(document.getElementById("predictAwayScore").value);
  const kickoffAt = Math.floor(new Date(`${fixture.date}T${fixture.time || "00:00"}:00`).getTime() / 1000);
  const status = document.getElementById("predictStatusMsg");

  try {
    const res = await fetch(`${CHAT_WORKER_BASE}/api/predictions/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${getAuthToken()}` },
      body: JSON.stringify({
        fixture_id: fixtureId, home_team: fixture.home.name, away_team: fixture.away.name,
        kickoff_at: kickoffAt, predicted_home: predictedHome, predicted_away: predictedAway
      })
    });
    const data = await res.json();
    if (!res.ok) { status.textContent = data.error || "Couldn't submit — try again."; return; }
    if (!myPredictionsByFixture) myPredictionsByFixture = new Map();
    myPredictionsByFixture.set(String(fixtureId), { predicted_home: predictedHome, predicted_away: predictedAway, points: null, resolved: 0 });
    renderPredictTab(fixture);
  } catch (err) {
    status.textContent = "Couldn't reach the server — try again.";
  }
}

async function toggleFavoriteTeam(name) {
  if (currentUser) {
    const token = getAuthToken();
    if (serverFavoritesByName && serverFavoritesByName.has(name)) {
      const id = serverFavoritesByName.get(name);
      await fetch(`${CHAT_WORKER_BASE}/api/user/favorites/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      serverFavoritesByName.delete(name);
    } else {
      const res = await fetch(`${CHAT_WORKER_BASE}/api/user/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ team_name: name })
      });
      if (res.ok) {
        const data = await res.json();
        if (!serverFavoritesByName) serverFavoritesByName = new Map();
        serverFavoritesByName.set(name, data.favorite.id);
      }
    }
  } else {
    const favs = getLocalFavoriteTeamNames();
    if (favs.has(name)) favs.delete(name);
    else favs.add(name);
    localStorage.setItem(FAVORITE_TEAMS_KEY, JSON.stringify([...favs]));
  }
  if (viewMode === "teams" || viewMode === "favorites") renderAllTeams();
  if (viewMode === "matches") loadMatches(); // homepage favorite-filter may need to re-run
}

function setViewMode(mode) {
  viewMode = mode;
  document.getElementById("viewMatchesBtn").classList.toggle("active", mode === "matches");
  document.getElementById("viewTeamsBtn").classList.toggle("active", mode === "teams");
  document.getElementById("viewFavoritesBtn").classList.toggle("active", mode === "favorites");
  document.getElementById("viewLeaderboardBtn").classList.toggle("active", mode === "leaderboard");
  document.getElementById("viewMyPredictionsBtn").classList.toggle("active", mode === "mypredictions");
  if (mode === "teams" || mode === "favorites") renderAllTeams();
  else if (mode === "leaderboard") renderLeaderboard();
  else if (mode === "mypredictions") renderMyPredictionsView();
  else loadMatches();
}

function renderMyPredictionsView() {
  if (!currentUser) {
    matchesDiv.innerHTML = `<div class="no-results">Log in to see your predictions.</div>`;
    return;
  }
  if (!myPredictionsByFixture || myPredictionsByFixture.size === 0) {
    matchesDiv.innerHTML = `<div class="no-results">No predictions yet. Open an upcoming match and use the Predict tab to make one.</div>`;
    return;
  }
  const rows = [...myPredictionsByFixture.values()].sort((a, b) => (b.kickoff_at || 0) - (a.kickoff_at || 0));
  matchesDiv.innerHTML = `
    <div class="leaderboard-list">
      ${rows.map(p => `
        <div class="leaderboard-row">
          <span class="predict-my-teams">${p.home_team} <strong>${p.predicted_home} - ${p.predicted_away}</strong> ${p.away_team}</span>
          <span class="leaderboard-points">${p.resolved ? `${p.points} pt${p.points === 1 ? "" : "s"}` : "Pending"}</span>
        </div>`).join("")}
    </div>`;
}

// Country names for the small set of ISO codes likely to show up here —
// falls back to the raw code (still real, just less friendly) for anything
// not in this list rather than guessing a name.
const COUNTRY_NAMES = {
  NG: "Nigeria", US: "the United States", GB: "the UK", CA: "Canada", GH: "Ghana",
  KE: "Kenya", ZA: "South Africa", IN: "India", DE: "Germany", FR: "France",
  ES: "Spain", IT: "Italy", BR: "Brazil", AR: "Argentina", NL: "Netherlands",
  EG: "Egypt", MA: "Morocco", AE: "the UAE", SA: "Saudi Arabia", AU: "Australia"
};

async function renderLeaderboard() {
  matchesDiv.innerHTML = skeletonRows(5);
  let leaderboard, me;
  try {
    const headers = currentUser ? { Authorization: `Bearer ${getAuthToken()}` } : {};
    const res = await fetch(`${CHAT_WORKER_BASE}/api/predictions/leaderboard`, { headers });
    if (!res.ok) throw new Error("bad response");
    const data = await res.json();
    leaderboard = data.leaderboard || [];
    me = data.me;
  } catch (err) {
    matchesDiv.innerHTML = `<div class="no-results">Couldn't load the leaderboard right now. <span class="retry-link" onclick="renderLeaderboard()">Tap to retry</span>.</div>`;
    return;
  }

  let meBanner = "";
  if (me) {
    const countryName = me.country ? (COUNTRY_NAMES[me.country] || me.country) : null;
    const parts = [];
    parts.push(me.rank ? `You're #${me.rank} overall this week` : "You haven't scored any predictions this week yet");
    if (me.countryRank) parts.push(`#${me.countryRank} in ${countryName}`);
    meBanner = `<div class="leaderboard-me-banner">${parts.join(" · ")}</div>`;
  }

  if (leaderboard.length === 0) {
    matchesDiv.innerHTML = meBanner + `<div class="no-results">No scored predictions yet this week. Predict an upcoming match to get on the board.</div>`;
    return;
  }

  matchesDiv.innerHTML = meBanner + `
    <div class="leaderboard-list">
      ${leaderboard.map((row, i) => `
        <div class="leaderboard-row${i < 3 ? " leaderboard-top3" : ""}">
          <span class="leaderboard-rank">${i + 1}</span>
          <span class="leaderboard-email">${row.email}</span>
          <span class="leaderboard-preds">${row.predictions_made} pred${row.predictions_made === 1 ? "" : "s"}</span>
          <span class="leaderboard-points">${row.total_points} pts</span>
        </div>`).join("")}
    </div>`;
}

function renderTeamCard(t) {
  const favorited = isTeamFavorited(t.name);
  return `
    <div class="team-list-row" onclick="openTeamModal('', '${t.name.replace(/'/g, "")}', '${t.logo}', '${t.league.replace(/'/g, "")}')">
      ${badgeImg(t.logo, t.name, "")}<span>${t.name}</span>
      <span class="fav-star team-fav-star${favorited ? " favorited" : ""}" onclick="event.stopPropagation(); toggleFavoriteTeam('${t.name.replace(/'/g, "")}')">${favorited ? "★" : "☆"}</span>
    </div>`;
}

function renderAllTeams() {
  const term = searchTerm.trim().toLowerCase();
  const favoritesOnly = viewMode === "favorites";

  let teams = favoritesOnly ? allTeams.filter(t => isTeamFavorited(t.name)) : allTeams;
  if (!favoritesOnly && activeLeague !== "All") teams = teams.filter(t => t.league === activeLeague);
  if (term) teams = teams.filter(t => t.name.toLowerCase().includes(term) || t.league.toLowerCase().includes(term));

  if (teams.length === 0) {
    const emptyMsg = favoritesOnly
      ? `No favorite teams yet. Star a team from the All Teams tab to save it here.`
      : `No teams match${term ? ` "${searchTerm}"` : ""}. Try another search or league.`;
    matchesDiv.innerHTML = `<div class="no-results">${emptyMsg}</div>`;
    return;
  }

  const leagueOptions = ["All", ...leagues]
    .map(l => `<option value="${l}"${l === activeLeague ? " selected" : ""}>${l === "All" ? "All Leagues" : l}</option>`)
    .join("");

  const byLeague = {};
  teams.forEach(t => { (byLeague[t.league] = byLeague[t.league] || []).push(t); });

  let html = favoritesOnly ? "" : `
    <div class="team-view-controls">
      <select class="league-filter-select" onchange="filterLeague(this.value, null)">${leagueOptions}</select>
    </div>`;

  Object.keys(byLeague).forEach(league => {
    html += `
      <div class="league-group">
        <div class="league-title">
          ${badgeImg(leagueLogos[league], league, "")}
          <div class="league-title-text">
            <span class="league-name">${league}</span>
            <span class="league-country">${LEAGUE_COUNTRY[league] || ""}</span>
          </div>
        </div>
        <div class="team-grid">
          ${byLeague[league].map(renderTeamCard).join("")}
        </div>
      </div>`;
  });

  matchesDiv.innerHTML = html;
}

const compDiv = document.getElementById("competitions");
const leagues = [...new Set(allTeams.map(t => t.league))].filter(l => l !== "Champions League");

const VISIBLE_LEAGUE_COUNT = 5; // plus "All Leagues" = 6 chips shown before the toggle, on narrow screens

compDiv.innerHTML = `<div class="comp-item active" onclick="filterLeague('All', this)"><span>All Leagues</span></div>`;
leagues.forEach((league, i) => {
  const extraClass = i >= VISIBLE_LEAGUE_COUNT ? " extra" : "";
  compDiv.innerHTML += `<div class="comp-item${extraClass}" onclick="filterLeague('${league}', this)">${badgeImg(leagueLogos[league], league, "")}<span>${league}</span></div>`;
});

const hiddenCount = Math.max(0, leagues.length - VISIBLE_LEAGUE_COUNT);
if (hiddenCount > 0) {
  compDiv.innerHTML += `<div class="comp-item comp-toggle" id="compToggle" onclick="toggleMoreLeagues()"><span>+${hiddenCount} more</span></div>`;
}

function toggleMoreLeagues() {
  const expanded = compDiv.classList.toggle("expanded");
  const toggleLabel = document.querySelector("#compToggle span");
  toggleLabel.textContent = expanded ? "Show less" : `+${hiddenCount} more`;
}

// Footer league links — every league GoalHub actually tracks, alphabetised,
// each a real working link into the site (jumpToLeague), not a copy of
// another site's link list.
function renderFooterLeagues() {
  const grid = document.getElementById("footerLeaguesGrid");
  if (!grid) return;
  const sorted = [...leagues].sort((a, b) => a.localeCompare(b));
  grid.innerHTML = sorted.map(league => `
    <a href="#topLeaguesSection" class="footer-league-link" onclick="jumpToLeague('${league.replace(/'/g, "\\'")}'); return false;">${league}</a>`).join("");
}
renderFooterLeagues();

// --- Today's Featured: highlights one of the currently-loaded real
// fixtures, preferring a marquee matchup, so it always reflects an actual
// game from the list rendered below (never an invented one).
async function renderFeaturedMatch() {
  const featuredDiv = document.getElementById("featured");
  if (currentFixtures.length === 0) {
    featuredDiv.innerHTML = `<div class="team-no-fixture">No fixtures for ${dateBarLabel(currentDate)}.</div>`;
    return;
  }
  const marqueeFixtures = currentFixtures.filter(f => marqueeClubs.includes(f.home.name) || marqueeClubs.includes(f.away.name));
  const pool = (marqueeFixtures.length > 0 ? marqueeFixtures : currentFixtures).slice().sort((a, b) => {
    const aUpcoming = a.status === "NS" ? 0 : 1;
    const bUpcoming = b.status === "NS" ? 0 : 1;
    if (aUpcoming !== bUpcoming) return aUpcoming - bUpcoming;
    return `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`);
  });
  const fixture = pool[0];
  const { home, away, league } = fixture;
  const status = matchStatusDisplay(fixture);
  const narrative = await matchNarrative(fixture);

  featuredDiv.innerHTML = `
    <div class="featured-card">
      <div class="featured-tag"><span class="dot"></span>${status.tag || dateBarLabel(currentDate)}</div>
      <div class="featured-teams">
        <div class="featured-team" onclick="openTeamModal('${home.id}','${home.name.replace(/'/g, "")}','${home.logo}','${league.replace(/'/g, "")}')">
          ${badgeImg(home.logo, home.name, "")}
          <span>${home.name}</span>
        </div>
        <div class="featured-vs">VS</div>
        <div class="featured-team" onclick="openTeamModal('${away.id}','${away.name.replace(/'/g, "")}','${away.logo}','${league.replace(/'/g, "")}')">
          ${badgeImg(away.logo, away.name, "")}
          <span>${away.name}</span>
        </div>
      </div>
      <div class="featured-meta">${league_icon(league)}<strong>${league}</strong> · ${status.primary}</div>
      <div class="featured-narrative">${narrative}</div>
    </div>`;
}

function league_icon(league) {
  return badgeImg(leagueLogos[league], league, "");
}

function formatApiDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

// --- Team detail modal: fetches this team's real last result, next fixture,
// and squad from the API on demand, using the team ID we already have from
// the fixture the user clicked. Cached per team ID so reopening the same
// team doesn't refetch.
const teamDetailCache = {};
const teamSquadCache = {};
const teamTabCache = {};
const teamIdByName = {};
let currentTeamModal = null;

// A team clicked from the "All Teams" roster (rather than from a fixture)
// has no known TheSportsDB ID yet — allTeams only carries name/league/logo.
// Resolve it once by name and cache the result (including a confirmed miss)
// so re-opening the same team is instant.
async function resolveTeamId(teamName) {
  if (teamIdByName[teamName] !== undefined) return teamIdByName[teamName];
  try {
    const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/searchteams.php?t=${encodeURIComponent(teamName)}`);
    const candidates = (data.teams || []).filter(t => t.strSport === "Soccer");
    const exact = candidates.find(t => t.strTeam.toLowerCase() === teamName.toLowerCase());
    const id = (exact || candidates[0] || {}).idTeam || null;
    teamIdByName[teamName] = id; // a real answer, including a genuine "not found" — safe to cache
    return id;
  } catch (err) {
    // A transient failure (rate limit, network hiccup) isn't a real answer —
    // don't cache it as "not found" or this team would show "coming soon"
    // for the rest of the session even once the API recovers.
    return null;
  }
}

async function openTeamModal(teamId, teamName, teamLogo, teamLeague) {
  const token = Symbol();
  currentTeamModal = { id: teamId || null, name: teamName, logo: teamLogo, league: teamLeague, token };
  document.getElementById("teamModalContent").innerHTML = `
    <div class="team-modal-header">
      ${badgeImg(teamLogo, teamName, "team-modal-badge")}
      <div>
        <h2>${teamName}</h2>
        <div class="team-modal-league">${league_icon(teamLeague)}${teamLeague}</div>
      </div>
    </div>
    <div class="match-modal-tabs">
      <button class="match-tab-btn active" data-team-tab="overview" onclick="showTeamTab('overview')">Overview</button>
      <button class="match-tab-btn" data-team-tab="squad" onclick="showTeamTab('squad')">Squad</button>
      <button class="match-tab-btn" data-team-tab="form" onclick="showTeamTab('form')">Last 5</button>
      <button class="match-tab-btn" data-team-tab="stats" onclick="showTeamTab('stats')">Stats</button>
    </div>
    <div class="match-modal-tab-body" id="teamTabBody"></div>`;
  document.getElementById("teamModal").classList.add("open");

  if (!teamId) {
    document.getElementById("teamTabBody").innerHTML = `<div class="team-no-fixture">Loading…</div>`;
    teamId = await resolveTeamId(teamName);
    if (!currentTeamModal || currentTeamModal.token !== token) return; // modal moved on to a different team
    currentTeamModal.id = teamId;
  }

  if (!teamId) {
    document.getElementById("teamTabBody").innerHTML = `<div class="team-no-fixture">Full data isn't available for ${teamName} yet — showing what we have.</div>`;
    pushModalUrl("team", teamSlug(teamName));
    return;
  }

  showTeamTab("overview");
  pushModalUrl("team", teamSlug(teamName));
}

async function showTeamTab(tab) {
  const team = currentTeamModal;
  if (!team) return;

  document.querySelectorAll("[data-team-tab]").forEach(b => b.classList.toggle("active", b.dataset.teamTab === tab));
  const body = document.getElementById("teamTabBody");

  const cacheKey = `${team.id}|${tab}`;
  if (teamTabCache[cacheKey]) {
    body.innerHTML = teamTabCache[cacheKey];
    return;
  }

  body.innerHTML = skeletonRows(4);

  let html, failed = false;
  try {
    if (tab === "overview") html = await renderTeamOverviewTab(team.id, team.name);
    else if (tab === "squad") html = await renderTeamSquadTab(team.id, team.name);
    else if (tab === "form") html = await renderTeamFormTab(team.id, team.name);
    else if (tab === "stats") html = await renderTeamStatsTab(team);
  } catch (err) {
    failed = true;
    html = `<div class="no-results">Couldn't load this right now (the free API can be flaky under load). <span class="retry-link" onclick="showTeamTab('${tab}')">Tap to retry</span>.</div>`;
  }

  if (currentTeamModal && currentTeamModal.id === team.id) {
    if (!failed) teamTabCache[cacheKey] = html;
    body.innerHTML = html;
  }
}

async function renderTeamOverviewTab(teamId, teamName) {
  let detail = teamDetailCache[teamId];
  if (!detail) {
    const [lastRes, nextRes] = await Promise.all([
      fetchJsonWithRetry(`${SPORTSDB_BASE}/eventslast.php?id=${teamId}`),
      fetchJsonWithRetry(`${SPORTSDB_BASE}/eventsnext.php?id=${teamId}`)
    ]);
    detail = {
      last: (lastRes.results || []).slice(0, 5),
      next: (nextRes.events || []).slice(0, 1)
    };
    teamDetailCache[teamId] = detail;
  }

  let fixtureHtml = `<div class="team-no-fixture">No upcoming fixture found.</div>`;
  if (detail.next && detail.next[0]) {
    const n = detail.next[0];
    fixtureHtml = `
      <div class="team-fixture-card">
        <div class="team-fixture-team">${badgeImg(resolveLogo(n.strHomeTeamBadge, n.strHomeTeam), n.strHomeTeam, "")}<span>${n.strHomeTeam}</span></div>
        <div class="team-fixture-time">${(n.strTimeLocal || n.strTime || "").slice(0, 5)}<span>${formatApiDate(n.dateEvent)}</span></div>
        <div class="team-fixture-team">${badgeImg(resolveLogo(n.strAwayTeamBadge, n.strAwayTeam), n.strAwayTeam, "")}<span>${n.strAwayTeam}</span></div>
      </div>`;
  }

  const resultsHtml = renderTeamResultRows(detail.last, teamName);

  return `
    <div class="team-modal-section-title">Upcoming Fixture</div>
    ${fixtureHtml}
    <div class="team-modal-section-title">Recent Results</div>
    <div class="team-results-list">${resultsHtml}</div>`;
}

function renderTeamResultRows(results, teamName) {
  if (!results || results.length === 0) return `<div class="team-no-fixture">No recent matches available.</div>`;
  return results.map(r => {
    const isHome = r.strHomeTeam === teamName;
    const teamGoals = Number(isHome ? r.intHomeScore : r.intAwayScore);
    const oppGoals = Number(isHome ? r.intAwayScore : r.intHomeScore);
    const homeLogo = resolveLogo(r.strHomeTeamBadge, r.strHomeTeam);
    const awayLogo = resolveLogo(r.strAwayTeamBadge, r.strAwayTeam);
    let outcome = "draw";
    if (teamGoals > oppGoals) outcome = "win";
    else if (teamGoals < oppGoals) outcome = "loss";
    return `
      <div class="team-result-row outcome-${outcome}">
        <div class="team-result-date">${formatApiDate(r.dateEvent)}</div>
        <div class="team-result-teams">
          <span class="team-result-team">${badgeImg(homeLogo, r.strHomeTeam, "")}${r.strHomeTeam}</span>
          <span class="team-result-vs">vs</span>
          <span class="team-result-team">${badgeImg(awayLogo, r.strAwayTeam, "")}${r.strAwayTeam}</span>
        </div>
        <div class="team-result-score">${r.intHomeScore} - ${r.intAwayScore}</div>
      </div>`;
  }).join("");
}

async function renderTeamFormTab(teamId, teamName) {
  let detail = teamDetailCache[teamId];
  if (!detail) {
    const [lastRes, nextRes] = await Promise.all([
      fetchJsonWithRetry(`${SPORTSDB_BASE}/eventslast.php?id=${teamId}`),
      fetchJsonWithRetry(`${SPORTSDB_BASE}/eventsnext.php?id=${teamId}`)
    ]);
    detail = { last: (lastRes.results || []).slice(0, 5), next: (nextRes.events || []).slice(0, 1) };
    teamDetailCache[teamId] = detail;
  }
  return `<div class="team-results-list">${renderTeamResultRows(detail.last, teamName)}</div>`;
}

// Season stats (Played/Won/Drawn/Lost/GF/GA/Points) — pulled from whichever
// standings source has this team's row: full football-data.org standings
// first (has real GF/GA), then a manual override, then TheSportsDB's
// partial table (also has real GF/GA, just capped to a handful of teams).
async function renderTeamStatsTab(team) {
  const { league, name } = team;

  if (STANDINGS_LEAGUES[league]) {
    try {
      const competition = STANDINGS_LEAGUES[league];
      const season = seasonStringForLeague(league, dateKey(new Date())).split("-")[0];
      const data = await fetchJsonWithRetry(`${CHAT_WORKER_BASE}/standings?competition=${competition}&season=${season}`);
      const row = (data.table || []).find(r => normalizeTeamName(r.team.name) === normalizeTeamName(name) || normalizeTeamName(r.team.shortName) === normalizeTeamName(name));
      if (row) return renderTeamStatsGrid({ played: row.playedGames, won: row.won, drawn: row.draw, lost: row.lost, gf: row.goalsFor, ga: row.goalsAgainst, pts: row.points });
    } catch (err) { /* fall through to the next source */ }
  }

  const manualRow = (MANUAL_STANDINGS[league] || []).find(r => r.team === name);
  if (manualRow) {
    return renderTeamStatsGrid({ played: manualRow.p, won: manualRow.w, drawn: manualRow.d, lost: manualRow.l, gf: null, ga: null, pts: manualRow.pts });
  }

  const leagueId = LEAGUE_IDS[league];
  if (leagueId) {
    try {
      const season = seasonStringForLeague(league, dateKey(new Date()));
      const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/lookuptable.php?l=${leagueId}&s=${season}`);
      const row = (data.table || []).find(r => r.strTeam === name);
      if (row) return renderTeamStatsGrid({ played: row.intPlayed, won: row.intWin, drawn: row.intDraw, lost: row.intLoss, gf: row.intGoalsFor, ga: row.intGoalsAgainst, pts: row.intPoints });
    } catch (err) { /* fall through */ }
  }

  return `<div class="team-no-fixture">Season stats aren't available for ${name} yet.</div>`;
}

function renderTeamStatsGrid(s) {
  const cells = [
    ["Played", s.played], ["Won", s.won], ["Drawn", s.drawn], ["Lost", s.lost],
    ["Goals For", s.gf ?? "—"], ["Goals Against", s.ga ?? "—"], ["Points", s.pts]
  ];
  return `<div class="team-stats-grid">${cells.map(([label, val]) => `
    <div class="team-stat-cell"><span class="team-stat-value">${val ?? "—"}</span><span class="team-stat-label">${label}</span></div>`).join("")}</div>`;
}

// Buckets TheSportsDB's free-text position strings ("Right-Back", "Defensive
// Midfield", "Left Wing"...) into the four groups every squad list uses.
function squadPositionGroup(position) {
  const p = (position || "").toLowerCase();
  if (p.includes("goalkeeper")) return "Goalkeepers";
  if (p.includes("back") || p.includes("defender") || p.includes("centre-back")) return "Defenders";
  if (p.includes("midfield")) return "Midfielders";
  if (p.includes("wing") || p.includes("forward") || p.includes("striker")) return "Forwards";
  return "Coaching Staff";
}

function calcAge(dateBorn) {
  const d = new Date(dateBorn);
  if (!dateBorn || isNaN(d)) return null;
  return Math.floor((Date.now() - d.getTime()) / (365.25 * 24 * 3600 * 1000));
}

// Covers the nationalities that actually turn up in these squads; anything
// missing just shows the plain country name instead of a wrong or blank flag.
const NATIONALITY_FLAGS = {
  "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "Wales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "Northern Ireland": "🇬🇧", "Republic of Ireland": "🇮🇪", "Ireland": "🇮🇪",
  "Spain": "🇪🇸", "France": "🇫🇷", "Germany": "🇩🇪", "Italy": "🇮🇹", "Portugal": "🇵🇹", "Netherlands": "🇳🇱", "Belgium": "🇧🇪",
  "Austria": "🇦🇹", "Switzerland": "🇨🇭", "Poland": "🇵🇱", "Turkey": "🇹🇷", "Greece": "🇬🇷", "Denmark": "🇩🇰", "Sweden": "🇸🇪",
  "Norway": "🇳🇴", "Finland": "🇫🇮", "Iceland": "🇮🇸", "Russia": "🇷🇺", "Ukraine": "🇺🇦", "Croatia": "🇭🇷", "Serbia": "🇷🇸",
  "Slovenia": "🇸🇮", "Slovakia": "🇸🇰", "Czech Republic": "🇨🇿", "Hungary": "🇭🇺", "Romania": "🇷🇴", "Bulgaria": "🇧🇬",
  "Bosnia and Herzegovina": "🇧🇦", "Montenegro": "🇲🇪", "North Macedonia": "🇲🇰", "Albania": "🇦🇱", "Kosovo": "🇽🇰",
  "The Netherlands": "🇳🇱", "USA": "🇺🇸", "United States": "🇺🇸", "Canada": "🇨🇦", "Mexico": "🇲🇽", "Brazil": "🇧🇷",
  "Argentina": "🇦🇷", "Uruguay": "🇺🇾", "Chile": "🇨🇱", "Colombia": "🇨🇴", "Peru": "🇵🇪", "Ecuador": "🇪🇨", "Paraguay": "🇵🇾",
  "Bolivia": "🇧🇴", "Venezuela": "🇻🇪", "Japan": "🇯🇵", "South Korea": "🇰🇷", "Korea Republic": "🇰🇷", "China": "🇨🇳",
  "Australia": "🇦🇺", "New Zealand": "🇳🇿", "Morocco": "🇲🇦", "Algeria": "🇩🇿", "Tunisia": "🇹🇳", "Egypt": "🇪🇬",
  "Nigeria": "🇳🇬", "Ghana": "🇬🇭", "Senegal": "🇸🇳", "Ivory Coast": "🇨🇮", "Cote d'Ivoire": "🇨🇮", "Cameroon": "🇨🇲",
  "South Africa": "🇿🇦", "Mali": "🇲🇱", "DR Congo": "🇨🇩", "Saudi Arabia": "🇸🇦", "Qatar": "🇶🇦"
};

function nationalityFlag(nationality) {
  return NATIONALITY_FLAGS[nationality] || "";
}

async function renderTeamSquadTab(teamId, teamName) {
  const manual = MANUAL_SQUADS[teamName];
  const isManual = Array.isArray(manual) && manual.length > 0;

  let squad;
  if (isManual) {
    squad = manual.map(p => ({
      name: p.name, position: p.position || "", number: p.number || "",
      age: p.age || null, nationality: p.nationality || "", photo: ""
    }));
  } else {
    let raw = teamSquadCache[teamId];
    if (!raw) {
      const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/lookup_all_players.php?id=${teamId}`);
      raw = Array.isArray(data.player) ? data.player : [];
      teamSquadCache[teamId] = raw;
    }
    squad = raw.map(p => ({
      name: p.strPlayer, position: p.strPosition || "", number: p.strNumber || "",
      age: calcAge(p.dateBorn), nationality: p.strNationality || "", photo: p.strCutout || p.strThumb || ""
    }));
  }
  if (squad.length === 0) {
    return `<div class="team-no-fixture">Squad data coming soon for ${teamName}.</div>`;
  }

  const groups = { Goalkeepers: [], Defenders: [], Midfielders: [], Forwards: [], "Coaching Staff": [] };
  squad.forEach(p => groups[squadPositionGroup(p.position)].push(p));

  const renderPlayer = p => {
    const meta = [p.age ? `${p.age}y` : "", p.nationality ? `${nationalityFlag(p.nationality)} ${p.nationality}`.trim() : ""].filter(Boolean).join(" · ");
    return `
      <div class="lineup-player">
        ${playerPhotoImg(p.photo, p.name, "lineup-photo")}
        ${p.number ? `<span class="lineup-number">${p.number}</span>` : ""}
        <span class="lineup-name">${p.name}</span>
        ${meta ? `<span class="lineup-meta">${meta}</span>` : ""}
        <span class="lineup-position">${p.position || ""}</span>
      </div>`;
  };

  const sections = Object.entries(groups)
    .filter(([, list]) => list.length > 0)
    .map(([name, list]) => `
      <div class="team-modal-section-title">${name}</div>
      ${list.map(renderPlayer).join("")}`)
    .join("");

  // A manually-entered squad is presumed complete — only show the "partial
  // data" note when we're falling back to the free tier's ~10-entry list.
  if (isManual) return sections;
  return `
    <div class="h2h-note">Our free data source only has a partial squad list for this team — not the full roster.</div>
    ${sections}`;
}

function closeTeamModal() {
  document.getElementById("teamModal").classList.remove("open");
  currentTeamModal = null;
  clearModalUrl();
}

// --- Match detail modal: Info / Line-ups / Table / H2H tabs (deliberately
// no odds/betting content). Info renders instantly from data we already
// have; the other three tabs fetch lazily on first open and cache per
// match so switching tabs back and forth doesn't re-fetch.
let currentMatchFixture = null;
const matchTabCache = {};

function seasonStringForLeague(league, dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  // Calendar-year leagues — confirmed against TheSportsDB's own
  // strCurrentSeason for each (Brasileirao/Brazil Serie B: "2026",
  // Argentina leagues: "2026", Sweden/Norway top flights: "2026" — despite
  // MLS also running March-December, its own metadata reports "2026-2027",
  // so MLS uses the default Aug-cutoff format below).
  const CALENDAR_YEAR_LEAGUES = ["Brasileirao", "Liga Profesional Argentina", "Brazil Serie B", "Argentina Primera Nacional", "Sweden Allsvenskan", "Norway Eliteserien", "USA USL Championship", "South Korea K League 2", "MLS Next Pro"];
  if (CALENDAR_YEAR_LEAGUES.includes(league)) return String(d.getFullYear());
  const year = d.getMonth() >= 6 ? d.getFullYear() : d.getFullYear() - 1;
  return `${year}-${year + 1}`;
}

function openMatchModal(matchId) {
  const fixture = fixturesById[matchId];
  if (!fixture) return;
  currentMatchFixture = fixture;
  const status = matchStatusDisplay(fixture);

  document.getElementById("matchModalContent").innerHTML = `
    <div class="match-modal-league">${league_icon(fixture.league)}<span>${fixture.league}</span><span class="match-modal-country">${LEAGUE_COUNTRY[fixture.league] || ""}</span></div>
    <div class="match-modal-teams">
      <div class="match-modal-team" onclick="closeMatchModal(); openTeamModal('${fixture.home.id}','${fixture.home.name.replace(/'/g, "")}','${fixture.home.logo}','${fixture.league.replace(/'/g, "")}')">
        ${badgeImg(fixture.home.logo, fixture.home.name, "")}<span>${fixture.home.name}</span>
      </div>
      <div class="match-modal-center">
        <div class="match-modal-time">${status.primary}</div>
        <div class="match-modal-sub">${status.tag || formatDateLabel(new Date(fixture.date + "T00:00:00"))}</div>
      </div>
      <div class="match-modal-team" onclick="closeMatchModal(); openTeamModal('${fixture.away.id}','${fixture.away.name.replace(/'/g, "")}','${fixture.away.logo}','${fixture.league.replace(/'/g, "")}')">
        ${badgeImg(fixture.away.logo, fixture.away.name, "")}<span>${fixture.away.name}</span>
      </div>
    </div>
    <div class="match-modal-tabs">
      <button class="match-tab-btn active" data-tab="info" onclick="showMatchTab('info')">Info</button>
      ${fixture.status === "NS" || !fixture.status ? `<button class="match-tab-btn" data-tab="predict" onclick="showMatchTab('predict')">Predict</button>` : ""}
      <button class="match-tab-btn" data-tab="lineups" onclick="showMatchTab('lineups')">Line-ups</button>
      <button class="match-tab-btn" data-tab="table" onclick="showMatchTab('table')">Table</button>
      <button class="match-tab-btn" data-tab="stats" onclick="showMatchTab('stats')">Stats</button>
      <button class="match-tab-btn" data-tab="h2h" onclick="showMatchTab('h2h')">H2H</button>
      <button class="match-tab-btn" data-tab="chat" onclick="showMatchTab('chat')">Chat</button>
      <button class="match-tab-btn" data-tab="motm" onclick="showMatchTab('motm')">MOTM</button>
    </div>
    <div class="match-modal-tab-body" id="matchTabBody"></div>`;

  document.getElementById("matchModal").classList.add("open");
  showMatchTab("info");
  pushModalUrl("match", matchId);
}

function closeMatchModal() {
  document.getElementById("matchModal").classList.remove("open");
  currentMatchFixture = null;
  closeChatSocket();
  clearModalUrl();
}

// Standalone standings view (the "League Standings" shortcut on each league
// group), reusing the same modal shell as the match detail view but without
// a two-team header since there's no specific match involved.
async function openLeagueTableModal(league) {
  document.getElementById("matchModalContent").innerHTML = `
    <div class="match-modal-league">
      ${league_icon(league)}<span>${league}</span><span class="match-modal-country">${LEAGUE_COUNTRY[league] || ""}</span>
    </div>
    <div class="team-modal-section-title">Standings</div>
    <div id="leagueTableBody"><div class="team-no-fixture">Loading…</div></div>`;
  document.getElementById("matchModal").classList.add("open");

  let html;
  try {
    html = await fetchLeagueTableHtml(league, dateKey(new Date()), []);
  } catch (err) {
    html = `<div class="team-no-fixture">Couldn't load the table right now.</div>`;
  }
  const body = document.getElementById("leagueTableBody");
  if (body) body.innerHTML = html;
}

// --- Per-match chat + score prediction (backed by the ChatRoom Durable
// Object in api-proxy/worker.js). Nickname-only identity, stored in
// localStorage so it's asked once and then remembered for every match.
const NICKNAME_KEY = "goalhub_nickname";
let chatSocket = null;
let chatSocketMatchId = null;

function getNickname() {
  return localStorage.getItem(NICKNAME_KEY);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderChatTab(fixture) {
  const body = document.getElementById("matchTabBody");
  const nickname = getNickname();

  if (!nickname) {
    body.innerHTML = `
      <div class="chat-nickname-prompt">
        <p>Pick a nickname to chat and predict scores. No account needed — just remembered on this device.</p>
        <input type="text" id="chatNicknameInput" placeholder="Your nickname" maxlength="24">
        <button onclick="submitNickname()">Join Chat</button>
      </div>`;
    document.getElementById("chatNicknameInput").addEventListener("keydown", e => {
      if (e.key === "Enter") submitNickname();
    });
    return;
  }

  body.innerHTML = `
    <div class="chat-panel">
      <div class="chat-messages" id="chatMessages"><div class="chat-system-msg">Connecting…</div></div>
      <div class="chat-predict-row">
        <span class="chat-predict-label">Predict:</span>
        <input type="number" id="predictHome" min="0" max="30" class="chat-score-input" placeholder="0">
        <span>-</span>
        <input type="number" id="predictAway" min="0" max="30" class="chat-score-input" placeholder="0">
        <button onclick="submitPrediction()">Predict</button>
      </div>
      <div class="chat-input-row">
        <input type="text" id="chatInput" placeholder="Say something…" maxlength="500">
        <button onclick="sendChatMessage()">Send</button>
      </div>
    </div>`;
  document.getElementById("chatInput").addEventListener("keydown", e => {
    if (e.key === "Enter") sendChatMessage();
  });

  connectChatSocket(fixture.id);
  if (chatSocketMatchId === fixture.id && lastChatHistory !== null) paintChatHistory(lastChatHistory);
}

function submitNickname() {
  const input = document.getElementById("chatNicknameInput");
  const name = input.value.trim().slice(0, 24);
  if (!name) return;
  localStorage.setItem(NICKNAME_KEY, name);
  if (!currentMatchFixture) return;
  const activeTab = document.querySelector(".match-tab-btn.active")?.dataset.tab;
  if (activeTab === "motm") renderMotmTab(currentMatchFixture);
  else renderChatTab(currentMatchFixture);
}

// The server only sends "history"/"motm_tally" once, right after connect —
// whichever tab (Chat or MOTM) happens to be visible at that instant
// consumes it. Cache the last copy of each so the *other* tab, opened after
// the socket is already connected, can paint immediately from here instead
// of showing "Loading…" forever waiting for a payload that already came.
let lastChatHistory = null;
let lastMotmVotes = null;

function paintChatHistory(messages) {
  const list = document.getElementById("chatMessages");
  if (!list) return;
  list.innerHTML = messages.length ? "" : `<div class="chat-system-msg">No messages yet — say hello!</div>`;
  messages.forEach(appendChatMessage);
}

function connectChatSocket(matchId) {
  if (chatSocket && chatSocketMatchId === matchId && chatSocket.readyState <= WebSocket.OPEN) return;
  closeChatSocket();
  chatSocketMatchId = matchId;

  const wsUrl = CHAT_WORKER_BASE.replace(/^http/, "ws") + `/chat?match=${encodeURIComponent(matchId)}`;
  const ws = new WebSocket(wsUrl);
  chatSocket = ws;

  ws.onmessage = event => {
    if (chatSocket !== ws) return; // a newer connection has replaced this one
    let data;
    try { data = JSON.parse(event.data); } catch (err) { return; }
    if (data.type === "history") {
      lastChatHistory = data.messages;
      paintChatHistory(data.messages);
    } else if (data.type === "message") {
      appendChatMessage(data.message);
    } else if (data.type === "motm_tally") {
      lastMotmVotes = data.votes;
      renderMotmTally(data.votes);
    }
  };
  ws.onerror = () => {
    if (chatSocket !== ws) return;
    const list = document.getElementById("chatMessages");
    if (list) list.innerHTML = `<div class="chat-system-msg">Couldn't connect to chat right now. Try reopening this tab.</div>`;
  };
}

function closeChatSocket() {
  if (chatSocket) {
    try { chatSocket.close(); } catch (err) { /* already closing */ }
  }
  chatSocket = null;
  chatSocketMatchId = null;
  lastChatHistory = null;
  lastMotmVotes = null;
}

function appendChatMessage(msg) {
  const list = document.getElementById("chatMessages");
  if (!list) return;
  if (list.querySelector(".chat-system-msg")) list.innerHTML = "";

  const time = new Date(msg.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const html = msg.type === "prediction"
    ? `<div class="chat-msg chat-msg-prediction"><span class="chat-msg-nick">🔮 ${escapeHtml(msg.nickname)}</span> predicts <strong>${msg.home_score} - ${msg.away_score}</strong><span class="chat-msg-time">${time}</span></div>`
    : `<div class="chat-msg"><span class="chat-msg-nick">${escapeHtml(msg.nickname)}</span><span class="chat-msg-text">${escapeHtml(msg.text)}</span><span class="chat-msg-time">${time}</span></div>`;
  list.insertAdjacentHTML("beforeend", html);
  list.scrollTop = list.scrollHeight;
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text || !chatSocket || chatSocket.readyState !== WebSocket.OPEN) return;
  chatSocket.send(JSON.stringify({ type: "chat", nickname: getNickname(), text }));
  input.value = "";
}

function submitPrediction() {
  const homeInput = document.getElementById("predictHome");
  const awayInput = document.getElementById("predictAway");
  const home = homeInput.value;
  const away = awayInput.value;
  if (home === "" || away === "" || !chatSocket || chatSocket.readyState !== WebSocket.OPEN) return;
  chatSocket.send(JSON.stringify({ type: "prediction", nickname: getNickname(), homeScore: Number(home), awayScore: Number(away) }));
  homeInput.value = "";
  awayInput.value = "";
}

// --- Man of the Match voting, on the same per-match WebSocket room as chat
// (see ChatRoom in api-proxy/worker.js). Real starting lineups aren't
// available on TheSportsDB's free tier, so rather than a dropdown of
// players who may or may not have actually played, this is an open
// nomination + live tally — one vote per nickname, re-voting just changes it.
const MOTM_VOTE_KEY_PREFIX = "goalhub_motm_vote_";

function renderMotmTab(fixture) {
  const body = document.getElementById("matchTabBody");
  const nickname = getNickname();

  if (!nickname) {
    body.innerHTML = `
      <div class="chat-nickname-prompt">
        <p>Pick a nickname to vote for Man of the Match. No account needed — just remembered on this device.</p>
        <input type="text" id="chatNicknameInput" placeholder="Your nickname" maxlength="24">
        <button onclick="submitNickname()">Join Chat</button>
      </div>`;
    document.getElementById("chatNicknameInput").addEventListener("keydown", e => {
      if (e.key === "Enter") submitNickname();
    });
    return;
  }

  const myVote = localStorage.getItem(MOTM_VOTE_KEY_PREFIX + fixture.id) || "";
  body.innerHTML = `
    <div class="motm-panel">
      <div class="motm-vote-row">
        <input type="text" id="motmInput" placeholder="Player name…" maxlength="40" value="${escapeHtml(myVote)}">
        <button onclick="submitMotmVote()">Vote</button>
      </div>
      <div class="motm-tally" id="motmTally"><div class="chat-system-msg">Loading votes…</div></div>
    </div>`;
  document.getElementById("motmInput").addEventListener("keydown", e => {
    if (e.key === "Enter") submitMotmVote();
  });

  connectChatSocket(fixture.id);
  if (chatSocketMatchId === fixture.id && lastMotmVotes !== null) renderMotmTally(lastMotmVotes);
}

function submitMotmVote() {
  const input = document.getElementById("motmInput");
  const player = input.value.trim().slice(0, 40);
  if (!player || !chatSocket || chatSocket.readyState !== WebSocket.OPEN) return;
  chatSocket.send(JSON.stringify({ type: "motm", nickname: getNickname(), player }));
  if (currentMatchFixture) localStorage.setItem(MOTM_VOTE_KEY_PREFIX + currentMatchFixture.id, player);
}

function renderMotmTally(votes) {
  const el = document.getElementById("motmTally");
  if (!el) return; // MOTM tab isn't the one currently open
  if (!votes.length) {
    el.innerHTML = `<div class="chat-system-msg">No votes yet — be the first!</div>`;
    return;
  }
  const maxVotes = votes[0].votes;
  el.innerHTML = votes.map(v => `
    <div class="motm-row">
      <span class="motm-player">${escapeHtml(v.player)}</span>
      <div class="motm-bar-track"><div class="motm-bar-fill" style="width:${Math.round((v.votes / maxVotes) * 100)}%"></div></div>
      <span class="motm-count">${v.votes}</span>
    </div>`).join("");
}

async function showMatchTab(tab) {
  const fixture = currentMatchFixture;
  if (!fixture) return;

  document.querySelectorAll(".match-tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  const body = document.getElementById("matchTabBody");

  // Chat and MOTM are both live (the same per-match WebSocket feed), not
  // static HTML we can cache and stamp into innerHTML like the other tabs —
  // they manage their own DOM and share one connection between them.
  if (tab === "chat") {
    renderChatTab(fixture);
    return;
  }
  if (tab === "motm") {
    renderMotmTab(fixture);
    return;
  }
  if (tab === "predict") {
    renderPredictTab(fixture);
    return;
  }
  closeChatSocket(); // leaving chat/MOTM for a static tab — drop the connection

  const cacheKey = `${fixture.id}|${tab}`;
  if (matchTabCache[cacheKey]) {
    body.innerHTML = matchTabCache[cacheKey];
    return;
  }

  body.innerHTML = skeletonRows(4);

  let html, failed = false;
  try {
    if (tab === "info") html = await renderMatchInfoTab(fixture);
    else if (tab === "lineups") html = await renderMatchLineupsTab(fixture);
    else if (tab === "table") html = await renderMatchTableTab(fixture);
    else if (tab === "stats") html = await renderMatchStatsTab(fixture);
    else if (tab === "h2h") html = await renderMatchH2HTab(fixture);
  } catch (err) {
    // A transient fetch failure (network hiccup, shared free-key rate limit)
    // shouldn't get cached as if it were a real answer — that would leave
    // the tab stuck showing "couldn't load" for the rest of the session
    // even once the underlying API is fine again. Leave it uncached so the
    // next click retries fresh.
    failed = true;
    html = `<div class="no-results">Couldn't load this right now (the free API can be flaky under load). <span class="retry-link" onclick="showMatchTab('${tab}')">Tap to retry</span>.</div>`;
  }

  // Only paint if the user hasn't switched tabs or closed the modal while
  // this fetch was in flight.
  if (currentMatchFixture && currentMatchFixture.id === fixture.id) {
    if (!failed) matchTabCache[cacheKey] = html;
    body.innerHTML = html;
  }
}

// Cache of standings tables keyed by "league|season", reused by both the
// Table tab and this narrative context so a finished-match sentence doesn't
// trigger its own redundant fetch on top of one the Table tab already made.
const standingsTableCache = {};

async function getStandingsTable(league, dateStr) {
  const competition = STANDINGS_LEAGUES[league];
  if (!competition) return null; // only the 8 leagues with full (non-partial) standings
  const season = seasonStringForLeague(league, dateStr).split("-")[0];
  const cacheKey = `${league}|${season}`;
  if (standingsTableCache[cacheKey]) return standingsTableCache[cacheKey];
  try {
    const data = await fetchJsonWithRetry(`${CHAT_WORKER_BASE}/standings?competition=${competition}&season=${season}`);
    const table = data.table || [];
    standingsTableCache[cacheKey] = table;
    return table;
  } catch (err) {
    return null; // supplementary context — a failed fetch just means we skip it
  }
}

function findStandingsRow(table, teamName) {
  const normalized = normalizeTeamName(teamName);
  return table.find(row => normalizeTeamName(row.team.name) === normalized || normalizeTeamName(row.team.shortName) === normalized);
}

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Appends real table-position context to a finished match's narrative —
// "sit 2nd with 85 points", "3 points off the top" — using the standings
// snapshot we already have for the 8 fully-covered leagues. Never guesses
// at a position; if the team isn't found in that snapshot (name mismatch,
// fetch failure, uncovered league) it silently adds nothing rather than
// fabricating a league position.
async function appendTableContext(sentence, fixture, winnerName) {
  const table = await getStandingsTable(fixture.league, fixture.date);
  if (!table || table.length === 0) return sentence;
  const row = findStandingsRow(table, winnerName);
  if (!row) return sentence;

  if (row.position === 1) {
    return `${sentence} ${winnerName} sit top of the table with ${row.points} points.`;
  }
  const leaderPoints = table[0].points;
  const gap = leaderPoints - row.points;
  const gapPhrase = gap === 0
    ? "level on points with the top of the table"
    : `${gap} point${gap === 1 ? "" : "s"} off the top`;
  return `${sentence} ${winnerName} sit ${ordinal(row.position)} with ${row.points} points, ${gapPhrase}.`;
}

// Rule-based match narrative — a plain-English sentence built only from
// data we actually have (score, status, round, and — for finished matches
// in leagues with full standings — current table position). Not an AI
// call, and not guessing at events we can't see: TheSportsDB's free tier
// gives us no half-time score or goal/card timeline, so this deliberately
// never claims a "comeback" or a "red card changes everything" — only what
// the final or current scoreline (and real standings) actually tell us.
async function matchNarrative(fixture) {
  const { home, away, homeScore, awayScore, status, round } = fixture;
  const hasScore = homeScore !== null && homeScore !== undefined && awayScore !== null && awayScore !== undefined;

  if (isFinishedStatus(status) && hasScore) {
    const scoreline = `${homeScore}-${awayScore}`;
    if (homeScore === awayScore) {
      return homeScore === 0
        ? `${home.name} and ${away.name} played out a goalless draw.`
        : `${home.name} and ${away.name} shared the points in a ${scoreline} draw.`;
    }
    const margin = Math.abs(homeScore - awayScore);
    const winner = homeScore > awayScore ? home.name : away.name;
    const loser = homeScore > awayScore ? away.name : home.name;
    let sentence;
    if (margin >= 3) sentence = `${winner} thrashed ${loser} ${scoreline}.`;
    else if (margin === 2) sentence = `${winner} beat ${loser} comfortably, ${scoreline}.`;
    else sentence = `${winner} edged past ${loser} ${scoreline}.`;
    return appendTableContext(sentence, fixture, winner);
  }

  if (isLiveStatus(status) && hasScore) {
    const label = (STATUS_LABELS[status] || status || "live").toLowerCase();
    if (homeScore === awayScore) {
      return homeScore === 0
        ? `Still goalless between ${home.name} and ${away.name}, ${label}.`
        : `${home.name} and ${away.name} are level at ${homeScore}-${awayScore}, ${label}.`;
    }
    const leader = homeScore > awayScore ? home.name : away.name;
    const trailer = homeScore > awayScore ? away.name : home.name;
    return `${leader} lead ${trailer} ${homeScore}-${awayScore}, ${label}.`;
  }

  return `${home.name} host ${away.name}${round ? ` in Round ${round}` : ""}.`;
}

const venueCache = {};
async function getVenueCapacity(venueId) {
  if (!venueId) return null;
  if (venueId in venueCache) return venueCache[venueId];
  try {
    const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/lookupvenue.php?id=${venueId}`);
    const v = (data.venues || [])[0];
    const capacity = v && v.intCapacity ? Number(v.intCapacity) : null;
    venueCache[venueId] = capacity;
    return capacity;
  } catch (err) {
    return null; // supplementary — a failed lookup just means we skip it
  }
}

async function renderMatchInfoTab(fixture) {
  const [narrative, capacity] = await Promise.all([
    matchNarrative(fixture),
    getVenueCapacity(fixture.venueId)
  ]);
  return `
    <div class="match-narrative">${narrative}</div>
    <div class="match-info-card">
      <div class="match-info-row"><span class="match-info-icon">📅</span>${formatApiDate(fixture.date)}${fixture.time ? " · " + fixture.time : ""}</div>
      ${fixture.venue ? `<div class="match-info-row"><span class="match-info-icon">📍</span>${fixture.venue}${capacity ? ` · Capacity ${capacity.toLocaleString()}` : ""}</div>` : ""}
      ${fixture.round ? `<div class="match-info-row"><span class="match-info-icon">🏆</span>Round ${fixture.round}</div>` : ""}
    </div>`;
}

async function renderMatchLineupsTab(fixture) {
  const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/lookuplineup.php?id=${fixture.id}`);
  const players = Array.isArray(data.lineup) ? data.lineup : [];
  if (players.length === 0) {
    return `<div class="team-no-fixture">Line-ups aren't published for this match on our free data source.</div>`;
  }
  const byTeam = { home: [], away: [] };
  players.forEach(p => {
    const side = p.strHome === "Yes" ? "home" : "away";
    byTeam[side].push(p);
  });
  const renderPlayer = p => `
    <div class="lineup-player">
      ${playerPhotoImg(p.strCutout || p.strThumb || "", p.strPlayer, "lineup-photo")}
      ${p.strSquadNumber ? `<span class="lineup-number">${p.strSquadNumber}</span>` : ""}
      <span class="lineup-name">${p.strPlayer}</span>
      <span class="lineup-position">${p.strPosition || ""}</span>
    </div>`;
  const renderSide = (name, list) => `
    <div class="lineup-side">
      <div class="lineup-side-title">${name}</div>
      ${list.length ? list.map(renderPlayer).join("") : `<div class="team-no-fixture">None listed.</div>`}
    </div>`;
  // The free tier only ever surfaces a handful of lineup entries total
  // (across both teams combined) when it has any lineup data at all for
  // a match — nowhere near a full XI. Say so rather than presenting a
  // 2-5 player list as if it were the whole team sheet.
  return `
    <div class="h2h-note">Our free data source only has partial line-up data for this match — not the full squad.</div>
    <div class="lineup-grid">${renderSide(fixture.home.name, byTeam.home)}${renderSide(fixture.away.name, byTeam.away)}</div>`;
}

// football-data.org team names ("Arsenal FC") don't match TheSportsDB's
// ("Arsenal") or our own roster's, so strip common club-suffix noise before
// comparing when deciding which row to highlight.
function normalizeTeamName(name) {
  return (name || "")
    .toLowerCase()
    .replace(/\b(fc|cf|afc|sc|cd|ac|and)\b/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

async function fetchFullStandingsHtml(league, dateStr, highlightNames) {
  const competition = STANDINGS_LEAGUES[league];
  const season = seasonStringForLeague(league, dateStr).split("-")[0];
  const normalizedHighlights = highlightNames.map(normalizeTeamName);
  const data = await fetchJsonWithRetry(`${CHAT_WORKER_BASE}/standings?competition=${competition}&season=${season}`);
  const table = data.table || [];
  if (table.length === 0) {
    return `<div class="team-no-fixture">Standings aren't available for this competition right now.</div>`;
  }
  const rows = table.map(row => {
    const isHighlighted = normalizedHighlights.includes(normalizeTeamName(row.team.name)) || normalizedHighlights.includes(normalizeTeamName(row.team.shortName));
    return `
      <div class="table-row full${isHighlighted ? " table-row-highlight" : ""}">
        <span class="table-rank">${row.position}</span>
        <span class="table-team">${badgeImg(row.team.crest, row.team.name, "")}${row.team.shortName || row.team.name}</span>
        <span class="table-stat">${row.playedGames}</span>
        <span class="table-stat">${row.won}</span>
        <span class="table-stat">${row.draw}</span>
        <span class="table-stat">${row.lost}</span>
        <span class="table-stat">${row.goalDifference}</span>
        <span class="table-stat table-pts">${row.points}</span>
      </div>`;
  }).join("");
  return `
    <div class="table-header-row full">
      <span class="table-rank">#</span>
      <span class="table-team">Team</span>
      <span class="table-stat">P</span>
      <span class="table-stat">W</span>
      <span class="table-stat">D</span>
      <span class="table-stat">L</span>
      <span class="table-stat">GD</span>
      <span class="table-stat table-pts">Pts</span>
    </div>
    <div class="table-rows">${rows}</div>`;
}

function renderManualStandingsHtml(rows, highlightNames) {
  const body = rows.map(row => {
    const isHighlighted = highlightNames.includes(row.team);
    return `
      <div class="table-row full${isHighlighted ? " table-row-highlight" : ""}">
        <span class="table-rank">${row.pos}</span>
        <span class="table-team">${badgeImg(resolveLogo("", row.team), row.team, "")}${row.team}</span>
        <span class="table-stat">${row.p}</span>
        <span class="table-stat">${row.w}</span>
        <span class="table-stat">${row.d}</span>
        <span class="table-stat">${row.l}</span>
        <span class="table-stat">${row.gd}</span>
        <span class="table-stat table-pts">${row.pts}</span>
      </div>`;
  }).join("");
  return `
    <div class="table-header-row full">
      <span class="table-rank">#</span>
      <span class="table-team">Team</span>
      <span class="table-stat">P</span>
      <span class="table-stat">W</span>
      <span class="table-stat">D</span>
      <span class="table-stat">L</span>
      <span class="table-stat">GD</span>
      <span class="table-stat table-pts">Pts</span>
    </div>
    <div class="table-rows">${body}</div>`;
}

async function fetchLeagueTableHtml(league, dateStr, highlightNames) {
  if (STANDINGS_LEAGUES[league]) return fetchFullStandingsHtml(league, dateStr, highlightNames);
  if (MANUAL_STANDINGS[league] && MANUAL_STANDINGS[league].length > 0) {
    return renderManualStandingsHtml(MANUAL_STANDINGS[league], highlightNames);
  }
  const leagueId = LEAGUE_IDS[league];
  const season = seasonStringForLeague(league, dateStr);
  const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/lookuptable.php?l=${leagueId}&s=${season}`);
  const table = data.table || [];
  if (table.length === 0) {
    return `<div class="team-no-fixture">Standings aren't available for this competition right now.</div>`;
  }
  const includesHighlighted = highlightNames.length === 0 || table.some(row => highlightNames.includes(row.strTeam));
  // The free tier truncates this endpoint to a handful of rows rather than
  // the full 18-20 team table, so highlighted teams often won't appear at
  // all (especially early-season, sitting on 0 points below the cutoff) —
  // say so plainly instead of presenting a partial table as complete.
  const truncationNote = !includesHighlighted
    ? `<div class="h2h-note">Our free data source only returns a partial table — ${highlightNames.join(" and ")} ${highlightNames.length > 1 ? "aren't" : "isn't"} in the portion shown below.</div>`
    : "";
  const rows = table.map(row => {
    const isHighlighted = highlightNames.includes(row.strTeam);
    return `
      <div class="table-row${isHighlighted ? " table-row-highlight" : ""}">
        <span class="table-rank">${row.intRank}</span>
        <span class="table-team">${badgeImg(row.strBadge ? row.strBadge.replace("/tiny", "") : "", row.strTeam, "")}${row.strTeam}</span>
        <span class="table-stat">${row.intPlayed}</span>
        <span class="table-stat">${row.intGoalDifference}</span>
        <span class="table-stat table-pts">${row.intPoints}</span>
      </div>`;
  }).join("");
  return `
    ${truncationNote}
    <div class="table-header-row">
      <span class="table-rank">#</span>
      <span class="table-team">Team</span>
      <span class="table-stat">P</span>
      <span class="table-stat">GD</span>
      <span class="table-stat table-pts">Pts</span>
    </div>
    <div class="table-rows">${rows}</div>`;
}

async function renderMatchTableTab(fixture) {
  return fetchLeagueTableHtml(fixture.league, fixture.date, [fixture.home.name, fixture.away.name]);
}

// Real match statistics (shots on/off target, total shots, blocked, shots
// inside box) — confirmed available on TheSportsDB's free tier for
// finished/live matches. There's nothing to show pre-match, so that case
// is handled honestly without even making the request.
async function renderMatchStatsTab(fixture) {
  if (!isLiveStatus(fixture.status) && !isFinishedStatus(fixture.status)) {
    return `<div class="team-no-fixture">Stats aren't available until the match starts.</div>`;
  }
  const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/lookupeventstats.php?id=${fixture.id}`);
  const stats = data.eventstats || [];
  if (stats.length === 0) {
    return `<div class="team-no-fixture">Stats aren't published for this match on our free data source.</div>`;
  }
  const rows = stats.map(s => {
    const home = Number(s.intHome) || 0;
    const away = Number(s.intAway) || 0;
    const total = home + away || 1;
    const homePct = Math.round((home / total) * 100);
    return `
      <div class="stat-row">
        <div class="stat-values">
          <span class="stat-value">${s.intHome}</span>
          <span class="stat-label">${s.strStat}</span>
          <span class="stat-value">${s.intAway}</span>
        </div>
        <div class="stat-bar-track">
          <div class="stat-bar-home" style="width:${homePct}%"></div>
          <div class="stat-bar-away" style="width:${100 - homePct}%"></div>
        </div>
      </div>`;
  }).join("");
  return `<div class="stats-list">${rows}</div>`;
}

function renderH2HResultRow(teamName, r) {
  if (!r) return `<div class="team-no-fixture">No recent result for ${teamName}.</div>`;
  const homeLogo = resolveLogo(r.strHomeTeamBadge, r.strHomeTeam);
  const awayLogo = resolveLogo(r.strAwayTeamBadge, r.strAwayTeam);
  return `
    <div class="team-result-row">
      <div class="team-result-date">${formatApiDate(r.dateEvent)}</div>
      <div class="team-result-teams">
        <span class="team-result-team">${badgeImg(homeLogo, r.strHomeTeam, "")}${r.strHomeTeam}</span>
        <span class="team-result-vs">vs</span>
        <span class="team-result-team">${badgeImg(awayLogo, r.strAwayTeam, "")}${r.strAwayTeam}</span>
      </div>
      <div class="team-result-score">${r.intHomeScore} - ${r.intAwayScore}</div>
    </div>`;
}

// W/D/L for a specific team from one of their own past results (as
// returned by eventslast.php — a result already known to involve them).
function outcomeForTeam(result, teamId) {
  const isHome = String(result.idHomeTeam) === String(teamId);
  const own = Number(isHome ? result.intHomeScore : result.intAwayScore);
  const opp = Number(isHome ? result.intAwayScore : result.intHomeScore);
  if (own > opp) return "W";
  if (own < opp) return "L";
  return "D";
}

async function renderFormGuide(fixture, homeResultsFull, awayResultsFull) {
  const table = await getStandingsTable(fixture.league, fixture.date);
  const homeResults = homeResultsFull.slice(0, 5).reverse();
  const awayResults = awayResultsFull.slice(0, 5).reverse();

  const positionTag = teamName => {
    if (!table) return "";
    const row = findStandingsRow(table, teamName);
    return row ? `<span class="form-position">${ordinal(row.position)}</span>` : "";
  };

  const renderSide = (team, results) => `
    <div class="form-side">
      <div class="form-side-header">${badgeImg(team.logo, team.name, "")}<span>${team.name}</span>${positionTag(team.name)}</div>
      <div class="form-badges">
        ${results.length ? results.map(r => `<span class="form-badge form-${outcomeForTeam(r, team.id).toLowerCase()}">${outcomeForTeam(r, team.id)}</span>`).join("") : `<span class="form-badge-empty">No recent results</span>`}
      </div>
    </div>`;

  return `
    <div class="team-modal-section-title">Recent Form</div>
    <div class="form-guide">
      ${renderSide(fixture.home, homeResults)}
      ${renderSide(fixture.away, awayResults)}
    </div>`;
}

// One row of a real past meeting between these two teams (from API-Football
// via the Worker's /h2h route — see renderMatchH2HTab).
function renderH2HMeetingRow(m) {
  return `
    <div class="team-result-row">
      <div class="team-result-date">${formatApiDate(m.date.slice(0, 10))}</div>
      <div class="team-result-teams">
        <span class="team-result-team">${badgeImg(m.home.logo, m.home.name, "")}${m.home.name}</span>
        <span class="team-result-vs">vs</span>
        <span class="team-result-team">${badgeImg(m.away.logo, m.away.name, "")}${m.away.name}</span>
      </div>
      <div class="team-result-score">${m.home.score ?? "-"} - ${m.away.score ?? "-"}</div>
    </div>`;
}

async function renderMatchH2HTab(fixture) {
  const [homeData, awayData] = await Promise.all([
    fetchJsonWithRetry(`${SPORTSDB_BASE}/eventslast.php?id=${fixture.home.id}`),
    fetchJsonWithRetry(`${SPORTSDB_BASE}/eventslast.php?id=${fixture.away.id}`)
  ]);
  const homeResults = homeData.results || [];
  const awayResults = awayData.results || [];
  const formHtml = await renderFormGuide(fixture, homeResults, awayResults);

  // Real multi-season head-to-head, via the two teams' actual API-Football
  // fixture history — not guessed or invented. Falls back to each team's
  // most recent result (the old behavior) if the lookup fails or these two
  // teams genuinely have no meetings on record, rather than showing nothing.
  let h2hHtml;
  try {
    const res = await fetch(`${CHAT_WORKER_BASE}/h2h?home=${fixture.home.id}&away=${fixture.away.id}`);
    const data = await res.json();
    if (data.available && data.meetings && data.meetings.length > 0) {
      h2hHtml = `
        <div class="team-modal-section-title">Head-to-Head</div>
        ${data.meetings.map(renderH2HMeetingRow).join("")}`;
    } else {
      throw new Error("no H2H meetings available");
    }
  } catch (err) {
    const note = `<div class="h2h-note">Head-to-head history isn't available right now — here's each team's most recent result instead.</div>`;
    h2hHtml = note + renderH2HResultRow(fixture.home.name, homeResults[0]) + renderH2HResultRow(fixture.away.name, awayResults[0]);
  }

  return formHtml + h2hHtml;
}

document.getElementById("prevDay").addEventListener("click", () => changeDate(-1));
document.getElementById("nextDay").addEventListener("click", () => changeDate(1));

// A ?team= link doesn't depend on fixtures data (allTeams is already in
// memory) so it's resolved right away — waiting on the fixtures/live-now
// fetches below first (which, fetching ~40 leagues one at a time against a
// free API, can take many seconds) would otherwise leave a shared team
// link sitting blank for no reason. ?match=/?livematch= genuinely do need
// that data, so they're resolved by the second pass once it's in.
// suppressUrlPush stays true across both passes so neither one writes a
// redundant history entry for the URL that's already there.
suppressUrlPush = true;
applyUrlState();
Promise.all([loadFixturesAndRender(), renderLiveNowSection()]).then(() => {
  applyUrlState();
  suppressUrlPush = false;
});
initAuth();

// --- Dark/light theme toggle, persisted to localStorage. The actual switch
// on load happens inline in <head> (before first paint, avoids a flash);
// this just handles the runtime toggle and keeping the button icon in sync.
const THEME_KEY = "goalhub_theme";

function applyThemeToggleIcon() {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  document.getElementById("themeToggleBtn").textContent = isLight ? "☀️" : "🌙";
}

function toggleTheme() {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  if (isLight) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem(THEME_KEY, "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem(THEME_KEY, "light");
  }
  applyThemeToggleIcon();
}
applyThemeToggleIcon();

// If the visitor has never used the toggle (no explicit choice saved yet),
// keep following the device's light/dark setting live — e.g. the OS
// switching to dark at sunset — rather than freezing whatever it was at
// page load. The moment they do use the toggle, that choice takes over
// permanently and this listener stops applying (checked fresh each time).
try {
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", event => {
    if (localStorage.getItem(THEME_KEY)) return; // explicit choice already made — don't override it
    if (event.matches) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    applyThemeToggleIcon();
  });
} catch (err) { /* matchMedia unavailable — manual toggle still works fine */ }

// --- Sticky header intensifies (more opaque + shadow) once the page has
// actually scrolled, rather than looking identical to the resting state.
window.addEventListener("scroll", () => {
  document.getElementById("siteHeader").classList.toggle("scrolled", window.scrollY > 8);
}, { passive: true });

// --- Fade-in-on-scroll for the new homepage sections. Plain
// IntersectionObserver + CSS transition — no animation library needed.
const scrollFadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      scrollFadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".hero-section, .live-now-section, .top-leagues-section, .main-layout")
  .forEach(el => { el.classList.add("scroll-fade"); scrollFadeObserver.observe(el); });

// --- Auto-refresh for "All Matches": currentFixtures is otherwise only
// fetched once per page load / date change, so a match that goes from
// kickoff to live (score, minute, status all changing) just sits stale
// until something re-triggers a fetch. Refresh the whole set periodically,
// but only while a live match is actually present in the current view —
// no reason to spend the shared free key's quota polling an all-finished
// or all-upcoming day.
setInterval(() => {
  if (fixturesLoading) return;
  const hasLive = currentFixtures.some(f => isLiveStatus(f.status));
  if (hasLive) loadFixturesAndRender();
}, 60000);

// --- Keep liveFixturesById current: it's the source of real live match
// minutes cross-referenced into the "All Matches" list (matchStatusDisplay)
// as well as the Live Now grid itself. Without this it was only ever
// fetched once at page load, then quietly went stale as matches
// progressed, finished, or kicked off — the polling interval here matches
// the Worker's own 20s cache for this route, so this adds no real load
// beyond what that shared edge cache already amortizes across visitors.
setInterval(renderLiveNowSection, 20000);

// --- PWA: registers the service worker that lets the app shell (not live
// data — see sw.js) be installed and load offline. Silently no-ops on
// browsers without support rather than erroring.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => { /* offline support just won't be available */ });
  });
}

// --- "Install the app" banner: only ever shown when genuinely installable
// (not already installed, and dismissal is remembered so it never nags on
// a later visit). Chrome/Edge/Android fire beforeinstallprompt and get a
// real one-tap Install button; iOS Safari has no such API, so it gets a
// plain instructional line instead — never a button that would do nothing.
const INSTALL_DISMISSED_KEY = "goalhub_install_dismissed";
let deferredInstallPrompt = null;

function isAppAlreadyInstalled() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function isIOSSafari() {
  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
  return isIOS && isSafari;
}

function showInstallBanner() {
  if (isAppAlreadyInstalled()) return;
  try {
    if (localStorage.getItem(INSTALL_DISMISSED_KEY)) return;
  } catch (err) { /* localStorage unavailable — just show it, no way to remember dismissal anyway */ }
  const banner = document.getElementById("installBanner");
  if (!banner) return;
  banner.hidden = false;
}

function hideInstallBanner() {
  const banner = document.getElementById("installBanner");
  if (banner) banner.hidden = true;
}

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  document.getElementById("installBannerBtn").hidden = false;
  showInstallBanner();
});

window.addEventListener("appinstalled", hideInstallBanner);

document.getElementById("installBannerBtn").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  hideInstallBanner();
});

document.getElementById("installBannerDismiss").addEventListener("click", () => {
  try { localStorage.setItem(INSTALL_DISMISSED_KEY, "1"); } catch (err) { /* best-effort only */ }
  hideInstallBanner();
});

if (isIOSSafari() && !isAppAlreadyInstalled()) {
  document.getElementById("installBannerText").textContent = "Install GoalHub: tap Share, then \"Add to Home Screen\".";
  showInstallBanner();
}
