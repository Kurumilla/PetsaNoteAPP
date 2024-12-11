require 'faker'

200.times do
  Note.create(
    title: Faker::Lorem.sentence(word_count: 3), 
    body: Faker::Lorem.paragraph(sentence_count: 5), 
    created_at: Faker::Time.between(from: 1.year.ago, to: Time.now)
  )
end