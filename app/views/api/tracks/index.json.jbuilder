json.array! @tracks do |track|
  json.extract! track, :id, :title, :image_url, :audio_url
  json.user_likes track.user_likes.map { |user| user.id}
  json.like_count track.user_likes.length
end