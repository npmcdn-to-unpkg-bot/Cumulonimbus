json.user do
  json.email user.email
  json.id user.id
  json.liked_tracks user.liked_tracks.map { |track| track.id}
end
  json.signed_in true