class Note < ApplicationRecord
  validates :title, presence: true, uniqueness: { case_sensitive: false, message: 'is already in use, try another.' }
  validates :body, presence: true

  def self.search_by_query(query)
    where("LOWER(title) LIKE ? OR LOWER(body) LIKE ?", "%#{query.downcase}%", "%#{query.downcase}%")
  end

  # private
  
  # def self.escape_sql_pattern(pattern)
  #   pattern.gsub(/[%_\\]/, '\\\\\\&')
  # end
end