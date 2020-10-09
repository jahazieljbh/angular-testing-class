import { greet } from './greet';

describe ('greet', () => {// gree suit
	it('should include the <name> in the message ', () => {

		expect(greet('jahaziel')).toContain('jahaziel');
		
	})

	it('should include the "Hi" in the message ', () => {
		
		expect(greet('jahaziel')).toContain('Hi');
		
	})

	it('should include the "good day" in the message ', () => {

		expect(greet('jahaziel')).toContain('good Day');
		
	})
})
