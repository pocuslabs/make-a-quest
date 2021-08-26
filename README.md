# make-a-quest

make-a-quest is a prototype quest creation engine for a mock RPG, as a proof-of-concept for the larger effort I'm working on, [Adventure Kit](https://austinpocus.com/tags/adventure-kit).

## Notes

This proof-of-concept serves as a showcase for my work, a testing ground for things I want to try like Redux and Typescript, but mostly, it serves as the proof of concept for Adventure Kit's story and quest creation system.

The state is **not currently saved anywhere** except in your current session. If you refresh the page, **you will lose your data**. Saving what you've made is on my todo list, right after "The user should be able to set up a quest".

The UI is nonexistent right now, and the data models are very incomplete. In fact, nothing here is the final product yet -- treat this entire thing as a giant experimental work-in-progress. As such, there are no tests, no documentation to speak of aside from this README...this is a real prototype-stage codebase right now.

## Coming soon

This section will be rewritten, hopefully with each PR, as I add functionality and fix bugs. Next up:

- Test scaffolding
- End-to-end tests for creating a story and creating a quest
- Unit and integration tests for data models and their behavior

More to come!

## Progress updates

Visit my personal blog, specifically [the "adventure-kit" tag on austinpocus.com](https://austinpocus.com/tags/adventure-kit), to get updates on the development process and my thoughts behind it.

## Contributing

If you'd like to contribute, I'd love to have some help! I'll lay out a more formal process eventually, but for now:

- Fork the repo.
- Work on a feature branch on that fork.
- Submit a PR when you're ready! (Or if you need to post a WIP PR, that's cool too.)

You may want to email me before you start, though -- my email is in [my Github profile](https://github.com/ajpocus). Please include "make-a-quest" or "Adventure Kit" in the subject.

## License

Copyright 2021, Pocus Labs. Licensed under the MIT License. See the LICENSE file for details.
