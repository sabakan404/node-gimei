interface JapaneseGenerator {
  kanji(): string
  hiragana(): string
  katakana(): string
}

export function name(): {
  first(): JapaneseGenerator
  last(): JapaneseGenerator
  setGender(sex: 'male' | 'female'): void
}
export function address(): {
  zip: string
  prefecture: string
  city(): JapaneseGenerator
  town(): JapaneseGenerator
}
