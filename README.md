# make-a-quest

make-a-quest is a prototype quest creation engine for a mock RPG, as a proof-of-concept for the larger effort I'm working on, [Adventure Kit](https://austinpocus.com/tags/adventure-kit).

## Notes

I'm using this proof-of-concept, in part, to learn more modern Redux usage with Redux Toolkit, as I've found that the context API and reducer-based state logic is no longer adequate for my needs.

The state is not currently saved anywhere except in your current session. If you refresh the page, **you will lose your data**. Saving what you've made is on my todo list, right after "The user should be able to set up a quest".

The UI is nonexistent right now. Shield your eyes! I've put in some bare bones borders and padding, on a few components, but it's nothing even close to the final product yet. I haven't even picked fonts.

In fact, nothing here is the final product yet -- treat this entire thing as a giant experimental work-in-progress. As such, there are no tests, no documentation to speak of aside from this README, no typing hints...this is a real prototype-stage codebase right now.

## Contributing

If you'd like to contribute, I'd love to have some help! I'll lay out a more formal process eventually, but for now:

- Fork the repo.
- Work on a feature branch on that fork.
- Submit a PR when you're ready! (Or if you need to post a WIP PR, that's cool too.)

You may want to email me before you start, though -- my email is in [my Github profile](https://github.com/ajpocus). Please include "make-a-quest" or "Adventure Kit" in the subject.

## License

Copyright 2021, Pocus Labs. Licensed under the MIT License. See the LICENSE file for details.
