//cricketer
class Cricketer{
    cnstructor(name,age,catches, Hunderds,trophies,country,wkts,dob,address,gender)
{
this.sname=sname
this.age=age
this.catches=catches
this.Hunderds=Hunderds
this.Trohies=Trohies
this.country=country
this.wkts=wkts
this.dob=dob
this.address=address
this.gender=gender
}
display()
{
console.log(`name of the cricketer:${this.sname}\n age of the cricketer:${this.age}\n the catches is:${this.catches}\n and the Hunderds is:${this.Hunderds}\n the tropies is${this.trophies}\n and country is:${this.country}\n the wkts is:${this.wkts}\n dob of the cricketer:${this.dob}\n and address is:${this.address}\n and gender is:${this.gender}`)
}
}
//footballer
class footballer{
    cnstructor(name,age,goals, trophies,country,matches,assist,dob,address,gender )
{
this.sname=sname
this.age=age
this.goals=goals
this.trophies=trophies
this.country=country
this.matches=matches
this.assist=assist
this.dob=dob
this.address=address
this.gender=gender
}
display()
{
console.log(`name of the cricketer:${this.sname}\n age of the cricketer:${this.age}\n the goals is:${this.goals}\n and the trophies is:${this.trophies}\n the country is${this.country}\n and matches is:${this.matches}\n the assist is:${this.assist}\n dob of the cricketer:${this.dob}\n and address is:${this.address}\n and gender is:${this.gender}`)
}
}
//Hockey
class Hockey{
    cnstructor(name,age,goals, trophies,country,matches,dob,address,gender )
{
this.sname=sname
this.age=age
this.goals=goals
this.trophies=trophies
this.country=country
this.matches=matches
this.dob=dob
this.address=address
this.gender=gender
}
display()
{
console.log(`name of the cricketer:${this.sname}\n age of the cricketer:${this.age}\n the goals is:${this.goals}\n and the trophies is:${this.trophies}\n the country is${this.country}\n and matches is:${this.matches}\n dob of the cricketer:${this.dob}\n and address is:${this.address}\n and gender is:${this.gender}`)
}
}
//Rugby
class Rugby{
    cnstructor(name,age,goals, trophies,country,matches,dob,address,gender )
{
this.sname=sname
this.age=age
this.goals=goals
this.trophies=trophies
this.country=country
this.matches=matches
this.dob=dob
this.address=address
this.gender=gender
}
display()
{
console.log(`name of the cricketer:${this.sname}\n age of the cricketer:${this.age}\n the goals is:${this.goals}\n and the trophies is:${this.trophies}\n the country is${this.country}\n and matches is:${this.matches}\n dob of the cricketer:${this.dob}\n and address is:${this.address}\n and gender is:${this.gender}`)
}
}

obj1=new Cricketer("MS dhoni",40,30,7,3,"India",6,1983,"karnataka","male")
obj1.display()
obj2=new footballer("Messi",40,88,7,"Argentina",6,,1983,"karnataka","male")
obj2.display()
