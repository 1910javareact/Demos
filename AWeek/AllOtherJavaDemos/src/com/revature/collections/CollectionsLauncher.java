package com.revature.collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import com.revature.inheritance.Cactus;

public class CollectionsLauncher {

	public static void main(String[] args) {
		
		Cactus goldenBarrel = new Cactus(3, "a Spiky pumpking", "Green and yellow", "deserts", "Very");
		Cactus sanPedro = new Cactus(11, "Straight out of a western", "Green and more green", "Texas", "rather");
		Cactus bunnyEars = new Cactus(2, "Mickey Mouse lookin", "Green and white", "Florida, I guess", "more than a little");
		
		//almost always want to make new variables using their interfaces
		//this way, we can swap the implementation we use
		//with minimal hassle
		List<Cactus> myCacti = new ArrayList<>();
		
		myCacti.add(goldenBarrel);
		myCacti.add(sanPedro);
		myCacti.add(bunnyEars);
		System.out.println(myCacti);
		//enhanced for loop
		for(Cactus c : myCacti) {
			System.out.println(c);
		}
		
		//when making a new collection
		//we can add a collection as a param in the constructor
		Set<Cactus> cactiSet = new HashSet<>(myCacti);
		System.out.println(cactiSet);
		//adding duplicates to a set
		cactiSet.addAll(myCacti);
		//does nothing
		System.out.println(cactiSet);
		//adding duplicates to a list
		myCacti.addAll(cactiSet);
		//adding duplicates to a list, will add them to the end
		System.out.println(myCacti);
		
		//I don't have to make a variable to add something
		//I can create a new object, directly in the method call
		myCacti.add(new Cactus(5, "doesn't look much like a beaver", "green and purple", "deserts, who wouldve guessed", "mild"));
		
		//fill is a method, that places a specified object
		//in every open slot in a list
		Collections.fill(myCacti, bunnyEars);
		System.out.println(myCacti);
	}
	
	
}
