# 1) შექმენი კლასი FormatHelper და გაუწერე staticmethod-ები:
# seconds_to_hms(total_seconds). გადაჰყავს წამები "HH:MM:SS" ფორმატში (მაგ., 3665 -> "01:01:05"). თუ total_seconds < 0, გამოიტანოს ValueError.
# format_price(amount, currency), აბრუნებს გასუფთავებულ string-ს ორი ათწილადი რიცხვით და ვალუტით (მაგ., 12.5 და "GEL" -> "12.50 GEL").
class FormHelper:
    def __init__(self):
        pass
    @staticmethod
    def seconds_to_hms(total_seconds):
        if total_seconds < 0:
            return ValueError('totalseconds < 0!!')
        SS = total_seconds % 60
        MM = total_seconds // 60
        HH = total_seconds // 3600
        while MM >= 60:
            MM -= 60
        return [HH, MM, SS]
    def format_price(amount, currency):
        amount+= 0.001
        return str(round(amount, 2)) + " "+ currency
print(FormHelper.seconds_to_hms(44665))
print(FormHelper.format_price(100.111, 'EUR'))

# 2) შექმენი კლასი და გაუწერე staticmethod-ები:
# mask_card(card_number), მალავს ბარათის ნომრის ყველა ციფრს, გარდა ბოლო 4-ისა (მაგ., "4169738812345678" ან "4169 7388 1234 5678" -> "**** **** **** 5678")
# is_valid_pin(pin) - ამოწმებს, შედგება თუ არა პინ-კოდი ზუსტად 4 ან 6 ციფრისგან (მხოლოდ ციფრები, გამოტოვებების გარეშე).
class Rand:
    @staticmethod
    def mask_card(card_num):
        return f"**** **** **** {card_num[-4]}{card_num[-3]}{card_num[-2]}{card_num[-1]}"
    def is_valid(pin):
        return True if (len(str(pin)) == 4 or len(str(pin)) == 6) and pin.isdigit() else False
print(Rand.mask_card('1234 2345 4321 4211'))
print(Rand.is_valid("12e4"))
print(Rand.is_valid("1244"))
# 3) შექმენი კლასი MathHelper და გაუწერე staticmethod-ები:
# is_even(number) - აბრუნებს True, თუ რიცხვი ლუწია და False თუ კენტი.
class MathHelper:
    @staticmethod
    def is_even(num):
        return num % 2 == 0
# clamp(value, min_val, max_val) ზღუდავს value-ს [min_val, max_val] შუალედში: თუ min_val-ზე ნაკლებია, აბრუნებს min_val-ს; თუ max_val-ზე მეტია, აბრუნებს max_val-ს; სხვა შემთხვევაში - თავად value-ს. თუ min_val > max_val, გამოიტანოს ValueError.
    def clap(value, min_val, max_val):
        if min_val>max_val:
            return ValueError('min val > max val??')

        if value < min_val:
            return min_val
        elif value > max_val:
            return max_val
        else:
            return value

# 4) შექმენი კლასი OrderCalculator, რომელსაც ექნება კლასის ატრიბუტი TAX_RATE = 0.18 (18%).
# დაამატე სტატიკური მეთოდები:
# subtotal(prices) — ითვლის ფასების ჯამს. ცარიელი სიის შემთხვევაში აბრუნებს 0.0.
# apply_discount(amount, percent) — აკლებს amount-ს percent პროცენტს (მაგ., 100 და 20 -> 80.0). თუ ფასდაკლება 0-ზე ნაკლებია ან 100-ზე მეტია, გამოიტანოს ValueError.
# total_with_tax(amount) — ითვლის საბოლოო თანხას TAX_RATE-ის დამატებით

class OrderCalculator:
    TAX_RATE = 0.18
    @staticmethod
    def subtotal(Prices):
        return sum(Prices) if len(str(Prices)) >= 1 else 0.0
    def apply_disc(amount, percent):
        return amount - percent // 100 if percent >= 1 and percent < 100 else ValueError('eerrrooorrr')
    def total_wt_tx(amount):
        return amount + (amount * OrderCalculator.TAX_RATE)
print(OrderCalculator.apply_disc(100, 50))
print(OrderCalculator.subtotal([1, 2, 3]))
print(OrderCalculator.total_wt_tx(100))