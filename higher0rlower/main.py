import random
vs = """
 _    __    
| |  / /____
| | / / ___/
| |/ (__  ) 
|___/____(_)
"""
logo = """
    __  ___       __             
   / / / (_)___ _/ /_  ___  _____
  / /_/ / / __ `/ __ \/ _ \/ ___/
 / __  / / /_/ / / / /  __/ /    
/_/ ///_/\__, /_/ /_/\___/_/     
   / /  /____/_      _____  _____
  / /   / __ \ | /| / / _ \/ ___/
 / /___/ /_/ / |/ |/ /  __/ /    
/_____/\____/|__/|__/\___/_(_)geography 
                    
"""
countries = [
    {
        "country": "Canada",
        "region": "North America",
        "extention": 9984670,
        "population": 41575585
     },
    {
        "country": "Vatican City State",
        "region": "Southern Europe",
        "extention": 0.49,
        "population": 882
     },
    {
        "country": "United States",
        "region": "North America",
        "extention": 9525067,
        "population": 341784857
     
     },
     {
         "country": "Brazil",
        "region": "South America",
        "extention": 8510346 ,
        "population": 213421037
     },
     {
         "country": "Australia",
        "region": "the geographical region of Oceania",
        "extention": 7741220,
        "population": 27840775
     },
     {
         "country": "India",
        "region": "South Asia",
        "extention": 3287263,
        "population": 1428627663
     },
     {
         "country": "Argentina",
        "region": "South America",
        "extention": 2780400,
        "population": 46735004
     },
     {
         "country": "Kazakhstan",
        "region": "Central Asia",
        "extention": 2724910,
        "population": 20495975
     },
     {
         "country": "Algeria",
        "region": "North Africa",
        "extention": 2381741,
        "population": 47400000
     },
     {
         "country": "Democratic R. Congo",
        "region": "Central Africa",
        "extention": 2344858,
        "population": 114388160
     },
     {
         "country": "Saudi Arabia",
        "region": "West Asia",
        "extention": 2149690,
        "population": 33702731
     },
     {
         "country": "Mexico",
        "region": "North America",
        "extention": 1964375,
        "population": 131946900
     },
     {
         "country": "Indonesia",
        "region": "Sotheast Asia",
        "extention": 1904569,
        "population": 284438782
     }
]


def converter(user, op1, op2):
    if user == "a":
        return op1
    elif user == "b":
        return op2
    
def checker(user, right, points):
    if user ==  right:
        points += 1
        print(f"You Got it! | Current score {points}")
        return True, points
    else:
        print(f"Sorry that's not right! | Final score {points}")
        return False, points

def get_higher(first, second):

    if first["extention"] > second["extention"]:
        return first
    else:
        return second


sample1, sample2 = random.sample(list(countries), 2)
score = 0

game = True

while game:

    print("\n" * 20)
    print(f"{logo}")

    guess = input(f"Compare A: {sample1['country']}, a country in {sample1['region']} | population: {sample1['population']:,}\n{vs}\n"
                  f"With B: {sample2['country']}, a country in {sample2['region']} | population: {sample2['population']:,}\n: ").lower()
    
    guess = converter(guess, sample1, sample2)

    higher = get_higher(sample1, sample2)
    print(f"{higher["country"]}")

    game, score = checker(guess, higher, score)

    sample1 = sample2
    sample2 = random.choice(countries)
    while sample2 == sample1:
        sample2 = random.choice(countries)
