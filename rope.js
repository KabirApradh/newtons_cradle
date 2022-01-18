class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
		//this.offsetY = offsetY
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		push()
		stroke("white")
		strokeWeight(2);
		line(pointA.x,pointA.y,pointB.x + this.offsetX,pointB.y)
		pop()

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES

		
	}

}