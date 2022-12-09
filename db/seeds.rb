require 'faker'

puts "🌱 Seeding spices..."

#create USERS
puts 'Seeding users..'
User.create(
  name: 'John Doe',
  email: 'john@gmail.com',
  username: 'john',
  password: '123'
)


# create destinations
puts 'Seeding Houses..'
Destination.create( location: "Malindi" , description: "Southern Palms Beach Resort is a 4-star facility set in Kenyas South Coast along Diani Beach. The resort offers an all-inclusive meal plan and it is thatched roof architecture can be seen next to the Diani Chale Marine National Reserve which offers diving and snorkeling", image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1600", name: "Southern Palms", per_night: '3000')
Destination.create( location: "Diani" , description: "Diani Reef Beach Resort is a 5-star facility set on 34 acres next to Diani Beach. The resort has won several awards such as 2015s Africas leading spa resort which is a testament to the resorts quality.", image: "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1600", name: "Diani Reef", per_night: '2000')
Destination.create( location: "Naivasha" , description: "Lake Naivasha Country Club is a historic facility that prides itself on being the oldest property in Naivasha. Having been around since the 1930s it has transformed throughout the decades to be a sort-after accommodation option in Naivasha", image: "https://images.pexels.com/photos/2290738/pexels-photo-2290738.jpeg?auto=compress&cs=tinysrgb&w=1600", name: "L.Naivasha Country Club", per_night: '1500')
Destination.create( location: "Naruku" , description: "Sawela Lodges Lake Naivasha is a top-rated 5-star lodge located on the famous Moi South Lake Road in Naivasha. Serenity is the overriding theme at the lodge and one is immediately set at ease upon arrival", image: "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1600", name: "Sawela Lodge", per_night: '500')
Destination.create( location: "Meru" , description: "It has been famed as among Kenyas most luxurious retreats. With sweeping views over the buffalo and elephant-filled savannah, Elsa Kopje lives up to its reputation.", image: "https://images.pexels.com/photos/5899722/pexels-photo-5899722.jpeg?auto=compress&cs=tinysrgb&w=1600", name: "Elsa Kopje", per_night: '2500')
Destination.create( location: "Maasai Mara" , description: "Sarova Mara Camp, an opulent tent camp, is located in the Maasai Mara, Kenyas richest wildlife refuge, which is known for its yearly wildebeest migrations from the nearby Serengeti and its plethora of wildlife, including the BIG FIVE.", image: "https://images.pexels.com/photos/6056801/pexels-photo-6056801.jpeg?auto=compress&cs=tinysrgb&w=1600", name: "Sarova Mara", per_night: '5000')
Destination.create( location: "Maasai Mara" , description: "The camp, which is located at the Sekenani Rivers source, offers a tranquil setting in which to decompress, unwind, and take advantage of everything the Mara has to offer.", image: "https://images.pexels.com/photos/2376989/pexels-photo-2376989.jpeg?auto=compress&cs=tinysrgb&w=1600", name: "Serekani Camp", per_night: '4000')
Destination.create( location: "Watamu" , description: "Medina Palms prides itself on offering unique accommodation options that “provide more room to breathe than any conventional hotel or resort.” Accommodation options vary from Swahili style suites with views of the tropical garden to a tree-top penthouse", image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Medina Palms", per_night: '1000')
Destination.create( location: "Watamu" , description: "Hemingways Watamu is a 5-star boutique hotel set on Watamu Beach. The resort is notably set in the middle of Watamu Marine National Park. Hemingways Watamu has been providing world-class services to guests for close to 30 years.", image: "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1600", name: "Hemingways", per_night: '2500')
Destination.create( location: "Mombasa" , description: "Sarova Whitesands Beach Resort & Spa (4-star) is set on a 10-hectare beachfront tropical garden. It is one of Mombasa County’s high-end facilities and is part of the Sarova brand. The beach resort features Arabic architecture to set the mood for the perfect beach getaway.", image: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1600", name: "Sarova Whitesands", per_night: '6000')


#create REVIEWS

puts 'Seeding Reviews..'
15.times do 
  Review.create(
    content: Faker::Lorem.sentence,
    user_id: rand(1..User.all.size),
    destination_id: rand(1..Destination.all.size),
  )
end


puts 'Seeding Visits..'
# Visit.create(date: "12/12/2020", user_id:second.id, house_id: house7.id)
10.times do 
  Visit.create(
    start_date: Faker::Date.between(from: '2020-01-01', to: '2022-05-31'),
    destination_id: rand(1..Destination.all.size),
    user_id: rand(1..User.all.size),
    end_date: Faker::Date.between(from: '2020-01-01', to: '2022-05-31'),
  )
end


puts "✅ Done seeding!"