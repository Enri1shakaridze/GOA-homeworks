from turtle import*

#we want to paint a house

width(7)
color("black")
forward(200)

left(90)

forward(200)
left(90)

forward(200)

left(90)

forward(200)
left(90)
#end of square

#drawing a door
forward(70)
begin_fill
color("gray")
left(90)
forward(99)
right(90)
forward(60)
right(90)
forward(99)

penup()
goto(200, 200)
pendown

color('red')
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()


left(35)
forward(65)
left(85)
forward(20)


#drawing a windown

pendown()

forward(50)
left(90)
forward(40)
left(90)
forward(50)
left(90)
forward(40)
left(90)
forward(25)
width(4)
left(90)
forward(40)
left(90)
forward(25)
left(90)
forward(20)
left(90)
forward(50)
penup()
forward(60)
pendown()
forward(50)
left(90)
width(7)
forward(20)
left(90)
forward(50)
left(90)
forward(40)
left(90)
forward(25)
left(90)
width(4)
forward(40)
width(7)
right(90)
forward(25)
right(90)
forward(40)
right(90)
forward(40)

penup()
left(65)
forward(75)
left(30)
pendown()
color("black")
forward(2)

penup()
forward(70)

end_fill

exitonclick()




