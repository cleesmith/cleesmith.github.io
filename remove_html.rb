require 'rubygems'
require 'nokogiri'

TIME_REGEXP = /\d{1,}:\d{2}:\d{2}/

cc = File.open("ccSubs_com_discussing-black-magick-dark-witchcraft-part-2_en.sbv") do |f|
	Nokogiri::HTML(f)
end
cc = cc.text
# cc = cc.text.gsub /^$\n/, '' # delete all blank lines

open('cc.txt', 'w') do |f|
	cc.each_line do |line|
		line.strip!
		next if line.length <= 0
		# ignore timestamp lines, which fails if spoken
		# words include something like a timestamp:
		next if line.match(TIME_REGEXP)
	  f.puts line
	end
end
