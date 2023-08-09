- [x] fix footer still linking to same page (needs to be a client component)
- [ ] for tweets in the last 24 hour, show duration past
- [ ] extract username, hashtags, and links from tweets. replace with <Link>
- [ ] add navigation panel to status page when logged in. also add like and reply button
- [ ] replace .. with actions when user is logged in on fav, timeline, feed components
- [ ] use fullnames on page titles when available
- [ ] hide following count and following-small section if it is 0
- [ ] check /home tab menu urls
- [ ] override fullname with username if its available
- [ ] by default username is set as the full name
- [ ] check and implement
  - https://web.archive.org/web/20091007131707/http://twitter.com//
  - https://web.archive.org/web/20091010004544/http://twitter.com/public_timeline
  - https://web.archive.org/web/20081001114700/http://twitter.com:80/sessions
  - https://web.archive.org/web/20081217013517/twitter.com/public_timeline
  - https://web.archive.org/web/20081217200201/https://twitter.com/em33/status/1063088727

# Database

**users**
id, username, password, email, scoop, web, bio, location, language, protected, picture, picture_changed, theme, updates, checklist, device

**notices**
userid, auto_nudge, replies, new_follower, direct_text, newsletter

**themes**
background_image, tile, background, links, sidebar, sidebar_border, text

**updates**
text, author, type, parent, createdAt

**followers_following**
from, to, device_updates

**favorites**
userid, updateid

**blocks**
from, to

**device_updates**
phone, updates, turn_off, turn_off_from, turn_off_to,
