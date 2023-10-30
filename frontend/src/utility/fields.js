const fields = {
  actor: [
    // {
    //   title: 'actor id',
    //   id: 'actor_id',
    //   name: 'actor_id',
    //   required: true,
    //   type: 'text',
    // },
    {
      title: 'name',
      id: 'actor_name',
      name: 'actor_name',
      required: true,
      type: 'text',
    },
    {
      title: 'adhar number',
      id: 'adhar_number_id',
      name: 'adhar_number_id',
      required: true,
      type: 'number',
    },
    {
      title: 'pan number',
      id: 'pan_number_id',
      name: 'pan_number_id',
      required: true,
      type: 'number',
    },
    {
      title: 'din number',
      id: 'din_number_id',
      name: 'din_number_id',
      required: true,
      type: 'number',
    },
    {
      title: 'otp phoneNr',
      id: 'otp_phoneNr_id',
      name: 'otp_phoneNr_id',
      required: true,
      type: 'number',
    },
    {
      title: 'sim number',
      id: 'sim_number_id',
      name: 'sim_number_id',
      required: true,
      type: 'number',
    },
    {
      title: 'email',
      id: 'email_id',
      name: 'email_id',
      required: true,
      type: 'email',
    },
    {
      title: 'per phone',
      id: 'per_phone_id',
      name: 'per_phone_id',
      required: true,
      type: 'number',
    },
    {
      title: 'mother name',
      id: 'mother_name_id',
      name: 'mother_name_id',
      required: true,
      type: 'text',
    },
    {
      title: 'address',
      id: 'address_id',
      name: 'address_id',
      required: true,
      type: 'text',
    },
    {
      title: 'prop ids',
      id: 'prop_ids',
      name: 'prop_ids',
      required: true,
      type: 'number',
    },
    {
      title: 'adhar otp ids',
      id: 'adhar_otp_ids',
      name: 'adhar_otp_ids',
      required: true,
      type: 'number',
    },
    {
      title: 'only adhar ids',
      id: 'only_adhar_ids',
      name: 'only_adhar_ids',
      required: true,
      type: 'number',
    },
    {
      title: 'dummy ids',
      id: 'dummy_ids',
      name: 'dummy_ids',
      required: true,
      type: 'number',
    },
  ],
  bank: [
    // {
    //   title: 'unique bank id',
    //   id: 'unique_bank_id',
    //   name: 'unique_bank_id',
    //   required: true,
    //   type: 'number',
    // },
    {
      title: 'account numbers',
      id: 'account_numbers',
      name: 'account_numbers',
      required: true,
      type: 'number',
    },
    {
      title: 'comapany ids',
      id: 'comapany_ids',
      name: 'comapany_ids',
      required: true,
      type: 'number',
    },
    {
      title: 'ifsc',
      id: 'ifsc',
      name: 'ifsc',
      required: true,
      type: 'number',
    },
    {
      title: 'ad code',
      id: 'ad_code',
      name: 'ad_code',
      required: true,
      type: 'number',
    },
    {
      title: 'swift code',
      id: 'swift_code',
      name: 'swift_code',
      required: true,
      type: 'number',
    },
    {
      title: 'banker ids',
      id: 'banker_ids',
      name: 'banker_ids',
      required: true,
      type: 'number',
    },
  ],
  banker: [
    // {
    //   title: 'unique banker id',
    //   id: 'unique_banker_id',
    //   name: 'unique_banker_id',
    //   required: true,
    //   type: 'number',
    // },
    {
      title: 'banker name',
      id: 'banker_name',
      name: 'banker_name',
      required: true,
      type: 'text',
    },
    {
      title: 'rtds',
      id: 'rtds',
      name: 'rtds',
      required: true,
      type: 'boolean',
    },
    {
      title: 'rt',
      id: 'rt',
      name: 'rt',
      required: true,
      type: 'boolean',
    },
    {
      title: 'forex',
      id: 'forex',
      name: 'forex',
      required: true,
      type: 'boolean',
    },
    {
      title: 'demand',
      id: 'demand',
      name: 'demand',
      required: true,
      type: 'number',
    },
    {
      title: 'banker employee ids',
      id: 'banker_employee_ids',
      name: 'banker_employee_ids',
      required: true,
      type: 'number',
    },
    {
      title: 'company ids',
      id: 'company_ids',
      name: 'company_ids',
      required: true,
      type: 'number',
    },
    {
      title: 'actor ids',
      id: 'actor_ids',
      name: 'actor_ids',
      required: true,
      type: 'number',
    },
    {
      title: 'bank ids',
      id: 'bank_ids',
      name: 'bank_ids',
      required: true,
      type: 'number',
    },
  ],
}

export default fields
